import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index', req.query)
});

app.get("/about", (req, res) => {
    res.render('about', req.query)
});

app.get("/add_post", (req, res) => {
    res.render('add_post', req.query)
});

app.get("/post", (req, res) => {
    res.render('post', req.query)
});

app.listen(port, () => {
    console.log("Server has just started")
});