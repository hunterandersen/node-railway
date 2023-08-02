const { query } = require("../db/connection");

/*
 * This corresponds with a table named "logs" which has the following columns:
 *  id : INT (auto-increment)
 *  datetime: VARCHAR (not null)
 *  url : VARCHAR
 *  method: VARCHAR
 */

const logger = async (req, res, next) => {
  //Alternatively, you could let SQL auto generate a date time when the row is inserted
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const { url, method } = req;

  const values = {
    logtime: time,
    url: url,
    method: method,
  };

  try {
    const queryRes = await query(`INSERT INTO logs SET ?;`, [values]);
    if (queryRes) {
      console.log("Affected Rows:", queryRes.affectedRows);
    }
    next();
  } catch (err) {
    console.error(err);
    res.end(err);
  }
};

module.exports = {
  logger,
};
