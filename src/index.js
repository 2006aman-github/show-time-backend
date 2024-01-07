import { config } from "dotenv";
config({ path: "./env" });

import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";

import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;
connectDB()
  .then((success) => {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
  })
  .catch((err) => console.log("MONGODB CONNECTION ERROR: " + err));

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
