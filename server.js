const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/time', (req, res) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    res.json({ date: dateString, time: timeString });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});