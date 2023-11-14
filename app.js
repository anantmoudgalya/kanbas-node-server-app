import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
const app = express();
app.use(cors());
Hello(app);
Lab5(app);
app.listen(4000);
