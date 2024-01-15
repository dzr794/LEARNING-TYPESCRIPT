"use strict";
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Holi',
    });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
