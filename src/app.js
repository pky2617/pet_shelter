import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index";
import cors from "cors";
//const cors = require('cors');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", indexRouter);
app.use(cors({ origin: true }));

export default app;
