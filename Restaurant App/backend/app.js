import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./Error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import  dbConnection  from './Database/dbConnection.js';

const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;