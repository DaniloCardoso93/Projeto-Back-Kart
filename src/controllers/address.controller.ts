import { Request, Response } from "express";
import { iAddress } from "../interfaces/user.interface";
import { updateAddressService } from "../services/address/updateAddress.service";

export const updateAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const addressId: string = req.params.id;
  const addressData: iAddress = req.body;
  const data = await updateAddressService(addressData, addressId);
  return res.status(200).json(data);
};
