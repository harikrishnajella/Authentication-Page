require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userAuthRoute = require("./routes/userAuthRoute");

const app = express()

const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(cors())

app.use("/api/auth", userAuthRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is connected successfully..."))
  .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running port at ${PORT}...`)
})