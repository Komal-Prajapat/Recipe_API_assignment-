import express from "express";
import dotenv, { config } from "dotenv";
import color from "colors";
const app = express();
import mongoose from "mongoose";
import { RecipeRouter } from "./Router/recipe.js";
import bodyParser from "body-parser";
config({
  path: ".env",
});

app.use(bodyParser.json())

//connect a db
mongoose
  .connect(process.env.MONGOO_URL, {
    dbName: "recipe", 
    
  })
  .then(() => {
    console.log(" ********* Data Base is connected ******** ");
  });

// router 

app.use("/api",RecipeRouter)

//create a server
const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log(`Server is running on Port ${port}`.bgCyan);
});
