const express = require('express');
const { createClient } = require('redis');
const axios = require('axios');

const app = express();
const PORT = 3000;

const redisClient = createClient({
  url: 'redis://127.0.0.1:6379',
  legacyMode: true
});

// Connect to Redis
redisClient.connect().then(() => {
  console.log('Connected to Redis');
}).catch(console.error);

const checkCache = (req, res, next) => {
  const { userId } = req.params;

  redisClient.get(userId, (err, data) => {
    if (err) {
      console.error('Redis GET error:', err);
      return next();
    }

    if (data) {
      res.status(200).json({data:JSON.parse(data),fromCache:true});
     
    } else {
      next();
    }
  });
};

app.get('/user/:userId', checkCache, async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = response.data;

    redisClient.setex(userId, 3600, JSON.stringify(data), (err) => {
      if (err) {
        console.error('Redis SETEX error:', err);
      }
    });

    res.status(200).json({data:data,fromCatch:false})
  } catch (error) {
    console.error('API error:', error);
    res.status(500).send('Error retrieving user data');
  }
});

// Endpoint to clear Redis cache
app.get('/clear-cache', (req, res) => {
    redisClient.flushAll((err, reply) => {
      if (err) {
        console.error('Redis FLUSHALL error:', err);
        return res.status(500).send('Error clearing cache');
      }
      console.log('Redis cache cleared:', reply);
      res.send('Redis cache cleared');
    });
  });



const cacheClearInterval = 10 * 60 * 1000; 

// setInterval(() => {
//   redisClient.flushAll((err, reply) => {
//     if (err) {
//       console.error('Redis FLUSHALL error:', err);
//     } else {
//       console.log('Redis cache cleared:', reply);
//     }
//   });
// }, cacheClearInterval);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
