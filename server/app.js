import express from "express";
import cors from "cors";

import router_main from "./routes/main.routes.js";

const app = express();

// EXPRESS CONFIGS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HEADERS CONFIGS
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// ROUTES CONFIGS
app.use("/api/", router_main);

// DEFAULT ROUTE (Err 404)
app.use("/", (req, res, next) => {
  res.status(404).json({ res: "page not found" });
});

export default app;
