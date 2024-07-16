import express, { json } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
let jsonData;


app.use(json());

// Endpoint to get the JSON data
app.get('/data', (req, res) => {
    const filePath = path.join('./data.json', '..', 'data', 'data.json');
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        res.send(JSON.parse(data));
    });
});
// Endpoint to handle POST requests
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ success: true });
});

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
