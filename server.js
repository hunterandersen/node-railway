const express = require("express");
const cors = require("cors");
const {router} = require("./routes/api.route");

const server = express();

server.use(cors());
server.use("/", router);

server.listen(3005, () => {
    console.log("Server started on port 3005");
});