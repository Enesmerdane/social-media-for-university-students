const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const port = process.env.PORT || 3001;

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI);

// mongodb+srv://enesmrdanedev:<password>@cluster0.zvhsc2c.mongodb.net/?retryWrites=true&w=majority

const routes = require("./routes");

// PARSING
app.use(bodyParser.json());

// SANITIZING
app.use(xss());
app.use(mongoSanitize());

app.use("/api", routes);
const authRoute = require("./routes/auth.route");
app.use(authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
