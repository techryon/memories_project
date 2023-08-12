import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// initializing express, the below creates a new express application and calls it app to accept data
// express is nothing but a server
const app = express();

app.use("/posts", postRoutes);

// bodyParser is the middleware to parse the body section of the requests from the front end to the client
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // cors to secure our http requests

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://techryon:PassMongo123@cluster0.hjy8sgk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5173;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
