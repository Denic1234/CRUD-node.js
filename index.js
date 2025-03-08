require("dotenv").config();

const express = require("express");
const app = express();

app.get( "/", (req,res) =>{
    res.send("Hola Mundo gil");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));