const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Raja reddy deployment into AWS using AWS CI CD pipe line !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
