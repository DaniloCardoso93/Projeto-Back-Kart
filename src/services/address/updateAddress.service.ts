import { AppError } from "../../errors";
import { iAddress } from "../../interfaces/user.interface";
import { addressRepo } from "../../repositories";

export const updateAddressService = async (
  addressData: iAddress,
  addressId: string
): Promise<iAddress> => {
  const address = await addressRepo.findOneBy({ id: addressId });

  if (!address) {
    throw new AppError("Address not found", 404);
  }

  const updateAddress = addressRepo.create({
    ...address,
    ...addressData,
  });

  await addressRepo.save(updateAddress);

  return updateAddress;
};
