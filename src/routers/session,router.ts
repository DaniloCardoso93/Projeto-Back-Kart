import { Router } from "express";
import { loginUserController } from "../controllers/session.controller";

const loginRouter = Router()

loginRouter.post("", loginUserController)

export default loginRouter