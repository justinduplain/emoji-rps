const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const { db } = require('./db');
const PORT = process.env.PORT || 8080;

// db.sync() is handled at root: index.js
db.sync().then(() => console.log('Database is synced'));

const server = app.listen(PORT, () =>
  console.log(`Server listening on ${PORT}`)
);

const io = require('socket.io')(server);
// handle sockets
require('./socket')(io);

// logging middleware
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 'API' routes
app.use('/api', require('./api/api'));

// send index.html
app.use('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// 404 middleware
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next()
);

// error handling endware
app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);

module.exports = app;
