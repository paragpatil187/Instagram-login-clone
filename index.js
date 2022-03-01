const express=require ("express");
const app=express();
const cors = require("cors");
const userController = require("./configs/user.controller");

app.use(cors())

app.use(express.json())
app.use("/login", userController);

module.exports =app