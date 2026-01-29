const express = require("express");
const dotenv = require("dotenv");
const db = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json);
app.listen(3000,()=>{
    db.connect();
    console.log("Server ready !!")

})