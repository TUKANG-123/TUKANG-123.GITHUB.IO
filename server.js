const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verifikasi login
    if (email === 'admin' && password === 'admin') {
        const data = `Email: ${email}, Password: ${password}\n`;
        
        fs.appendFile('data.txt', data, (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send('Data saved successfully');
            }
        })}})