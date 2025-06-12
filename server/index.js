const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Connected to the server');
    res.send("Server is running")
})

app.get('/api/hello', (req, res) => {
    res.json({msg: 'Hello from express'});
})

app.listen(5000, () => {
     console.log('Server is running on port 5000');
})