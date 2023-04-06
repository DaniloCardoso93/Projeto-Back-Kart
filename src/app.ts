import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { advertiseRouter } from "./routers";
import { errorHandler } from "./errors";


const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/advertise", advertiseRouter)
app.use(errorHandler)


export default app;