import { Router } from "express";
import { ensureAuthMiddleware, validateSchemaMiddleware } from "../middlewares";
import { updateAddressSchema } from "../schemas/address.schema";
import { updateAddressController } from "../controllers/address.controller";

export const addressRouter = Router();

addressRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  validateSchemaMiddleware(updateAddressSchema),
  updateAddressController
);
