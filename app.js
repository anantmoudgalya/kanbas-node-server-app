import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";

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

app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
