// import express from "express";
import express from "express"
import cors from "cors";
import connectDB from "./config/db.js";
import indexRoutes from "./routes/index.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Connect to DB (ensure your db.ts uses dotenv or config that loads env before)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/ping", (_req, res) => res.json({ pong: true }));

// Mount routes
app.use("/", indexRoutes);
app.use("/api", authRoutes);

export default app;
