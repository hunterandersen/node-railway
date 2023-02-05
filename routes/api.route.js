const express = require("express");
const {query} = require("../db/connection");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req.url);

  try {
    const queryRes = await query(`SELECT * FROM products LIMIT 15;`);
    //console.log(queryRes);
    res.status(200).send(queryRes);
  } catch (err) {
    console.error(err);
    res.end(err);
  }
});

module.exports = {
    router
}

//export default router;
