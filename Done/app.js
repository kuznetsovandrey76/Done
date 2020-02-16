const log = console.log

const chalk = require('chalk');
const mysql = require('mysql2');
const express = require("express");
const bodyParser = require("body-parser");

// .env
// require('dotenv').config(__dirname + '/.env');
require('dotenv').config();

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});


app.use(express.static(__dirname + '/public'));
app.use(express.json({ limit: '1mb'}));
app.set("view engine", "pug");


// PAGES
app.get("/", function(req, res){   
    res.render("index");
});


// Middleware
app.post("/add-msg", urlencodedParser, function (req, res) {   
    
    const db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB,
        database: process.env.DB,
        password: process.env.PASS
    });

    if(!req.body) return res.sendStatus(400);
    const msg = req.body.msg,
          date = new Date();
            
    db.query("INSERT INTO msgs (msg, date) VALUES (?, ?)", [msg, date], function(err, data) {
      if(err) return log(err);
      db.end();
      res.redirect("/");
    });
});
 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));

