import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { advertiseRouter, loginRouter, userRouter } from "./routers";
import { errorHandler } from "./errors";
import { addressRouter } from "./routers/address.router";
import { commentRouter } from "./routers/commets.router";

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use('/docs', express.static(__dirname + '/docs'))
app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/advertise", advertiseRouter);
app.use("/address", addressRouter);
app.use("/comments", commentRouter)

app.use(errorHandler);

export default app;
