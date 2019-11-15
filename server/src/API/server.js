// * PKGS & SETTINGS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mainRouter = require('../Routes/main-router');
const settings = [morgan('combined'), helmet(), cors()];
const server = express();
server.use(settings);

server.use('/Lambdia', mainRouter);

module.exports = server;