import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { advertiseRouter } from "./routers";


const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/advertise", advertiseRouter)


export default app;