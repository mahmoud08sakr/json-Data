import express, { json } from 'express'
import fs from 'fs'
const app = express()
const port = 3000
let jsonData = JSON.parse(fs.readFileSync('./data.json'))

console.log(jsonData);

app.use(json())

app.get('/', (req, res) => {
    res.json(jsonData)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))