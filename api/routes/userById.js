const express = require('express');
const router = express.Router();
const db = require("../database/database");

router.get('/', function(req, res)  {
    const id = req.query.id;
    const sql = `SELECT * FROM users WHERE id = ${id}`;

    let params = [];
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json("error", err.message);
            return;
        }
        res.json({data: rows})

    });
})

module.exports = router;