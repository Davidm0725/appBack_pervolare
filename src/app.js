import express from "express";
import cors from "cors";
import categoriesRoutes from "./routes/categories.routes";
import authRoutes from "./routes/login.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", categoriesRoutes);

export default app;
