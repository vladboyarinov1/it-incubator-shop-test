const express = require('express');

const PORT = process.env.PORT || 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

const products = require('./products.json');
app.get('/api/products', (req, res) => {
    res.json({ data: products });
});

app.listen(3000, () => {
    console.log(`Server listening on ${3000}`);
});