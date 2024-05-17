const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    handler: (req, res, /*next*/) => {
      res.status(429).json({
        message: 'too many requests try again after 2 minutes',
        retryAfter: req.rateLimit.resetTime,
      });
    },
  });
  

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
