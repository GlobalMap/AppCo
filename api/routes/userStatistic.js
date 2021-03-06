const express = require('express');
const router = express.Router();
const db = require("../database/database");

/* Запит на статистику коритувачів */
router.get('/', function(req, res, next) {
    const sql = "SELECT * from users_statistic";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json("error", err.message);
            return;
        }
        res.json({data: rows})

    });
});

module.exports = router;