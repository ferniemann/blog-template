const express = require('express');
const app = express();
require('dotenv').config
const port = process.env.PORT || 5000;
const articles = require('./public/data/articles.json')


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { articles: articles });
});

app.listen(port, () => {
    console.log(`This App is running on port ${port}.`);
});

app.get('/article/:id', (req, res) => {
    res.render('pages/article', { id: Number(req.params.id), title: req.params.title, article: articles[req.params.id] })
});



app.use(function (req, res, next) {
    res.status(404).send('404 - Not Found!');
});