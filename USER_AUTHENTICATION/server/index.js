const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL} = process.env;
const PORT=4000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
app.listen(PORT, "localhost", () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});


app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
// app.use((req, res, next) => {
//   console.log("Request received at:", req.url);
//   next();
// });
app.use("/", authRoute);