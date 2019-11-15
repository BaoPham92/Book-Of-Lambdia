require('dotenv').config();
const server = require('./API/server');
const port = process.env.PORT || 4000;

server.listen(
    port,
    () => console.log(`Currently Lambdia is tuning on port: ${port}`)
);