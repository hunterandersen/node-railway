const express = require("express");
const cors = require("cors");
const { router } = require("./routes/api.route");
const { logger } = require("./middleware/middle.log");

const server = express();

//Middleware for cors
server.use(cors());
//Middleware for logging all incoming API requests
server.use(logger);
server.use("/", router);

server.listen(3005, () => {
    console.log("Server started on port 3005");
});