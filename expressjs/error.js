const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.join(__dirname, 'folder1');

app.get("*", (req, resp) => {
    resp.sendFile(`${publicpath}/help.htm`);
});

app.listen(7777);
