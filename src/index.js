import { config } from "dotenv";
config({ path: "./env" });

import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB();

// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );

//     app.on("error", (error) => {
//       console.log("ERROR: " + error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on: " + process.env.PORT);
//     });
//     console.log(`\n MongoDB Connected:  ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.error("ERROR: " + error);
//     throw error;
//   }
// })();
