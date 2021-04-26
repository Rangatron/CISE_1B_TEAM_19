const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('WP'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
