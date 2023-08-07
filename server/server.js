const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const { log } = require("console");

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
