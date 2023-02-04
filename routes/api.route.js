const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log(req.url);
    console.log(req.params);

    res.end("Good luck");
});

export default router;