const express = require("express");
const cors = require("cors");
const mainAPIRoute = require("./routes/api.route");

const server = express();

server.use(cors());

server.listen(() => {
    console.log("Server started on port 5001");
}, 5001);