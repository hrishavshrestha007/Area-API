const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({ message: 'API is working' });
});

app.post('/area/circle', (req, res) => {
    const { radius } = req.body;
    if (typeof radius !== 'number' || radius <= 0) {
        return res.status(400).json({ error: 'Invalid radius' });
    }
    const area = Math.PI * radius * radius;
    res.json({ area });    
});

app.post('/area/rectangle', (req, res) => {
    const { length, width } = req.body;
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0){
        return res.status(400).json({ error: 'Invalid length or width' });
    }
    const area = length * width;
    res.json({ area });
});

module.exports = app;