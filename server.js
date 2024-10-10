var HTTP_PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
path.join(__dirname, 'public');

app.get('/', (req, res)=> {
    res.sendFile('index.html');
});

app.listen(HTTP_PORT, () => {
    console.log(`Server running on http://localhost:${HTTP_PORT}`);
});

