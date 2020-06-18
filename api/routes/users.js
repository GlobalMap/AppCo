const express = require('express');
const router = express.Router();
const db = require("../database/database");

/* Запит на всіх користувачів */
router.get('/', function(req, res, next) {
  const sql = "SELECT * from users";

  const page = req.query.page;
  const limit = req.query.limit;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  console.log(startIndex, endIndex)

  let params = [];
  db.all(sql, params, (err, rows) => {
    if(err) {
      res.status(400).json("error", err.message);
      return;
    }

    const sliceData = rows.slice(startIndex, endIndex);
    res.json({
      data: sliceData,
      total: rows.length
    })
  });
});

module.exports = router;