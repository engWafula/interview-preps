const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const express = require('express');

console.log("CPUS",numCPUs);


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(8000, () => {
        console.log(`Worker ${process.pid} started running.......`);
    });
}
