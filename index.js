const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors')
app.use(cors())

const categories = require('./Data/categories.json')

const news = require('./Data/news.json');

app.get('/', (req, res) => {
    res.send("Dragon news server")
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
// all news
app.get('/news', (req, res) => {
    res.send(news);
})

// particular news 
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)

})
// category by news
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }
})

app.listen(port, () => {
    console.log(`Port is : ${port}`)
})