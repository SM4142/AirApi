import axios from "axios";
import express from "express";
import cors from "cors";
import airRouter from "./router/airRouter";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/", airRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
