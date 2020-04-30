const express = require('express');
const app = express();
const userController = require('./app/controllers/userController');
app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/user', userController);

app.listen(3000, () => {
    console.log(`Server started on port: 3000`);
});