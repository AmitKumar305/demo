const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello from home');
});
app.listen(PORT, () => {
    console.log('Server is running on port 8000');
});