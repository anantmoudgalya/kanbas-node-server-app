import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import "dotenv/config";
import session from "express-session";

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://ephemeral-hamster-a46952.netlify.app",
  "https://ephemeral-hamster-a46952.netlify.app",

  "http://a1--ephemeral-hamster-a46952.netlify.app",
  "https://a1--ephemeral-hamster-a46952.netlify.app",

  "http://a2--ephemeral-hamster-a46952.netlify.app",
  "https://a2--ephemeral-hamster-a46952.netlify.app",

  "http://a3--ephemeral-hamster-a46952.netlify.app",
  "https://a3--ephemeral-hamster-a46952.netlify.app",

  "http://a4--ephemeral-hamster-a46952.netlify.app",
  "https://a4--ephemeral-hamster-a46952.netlify.app",

  "http://a5--ephemeral-hamster-a46952.netlify.app",
  "https://a5--ephemeral-hamster-a46952.netlify.app",

  "http://a6--ephemeral-hamster-a46952.netlify.app",
  "https://a6--ephemeral-hamster-a46952.netlify.app",

  "http://localhost:3000",
  "https://localhost:3000",
];

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
