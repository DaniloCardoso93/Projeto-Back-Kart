import { Router } from "express";
import { loginUserController } from "../controllers/session.controller";
import { loginShape } from "../schemas";
import { validateSchemaMiddleware } from "../middlewares";

const loginRouter = Router()

loginRouter.post("", validateSchemaMiddleware(loginShape) ,loginUserController)

export default loginRouter