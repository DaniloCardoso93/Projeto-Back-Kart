import { AppError } from "../../errors";
import { iResponseUser } from "../../interfaces/user.interface";
import { userRepo } from "../../repositories";
import { returnUserShape } from "../../schemas";

const retrieveUserService = async (userId: string): Promise<iResponseUser> => {
  try {
    const user = await userRepo
      .createQueryBuilder("users")
      .leftJoinAndSelect("users.address", "address")
      .leftJoinAndSelect("users.announcements", "announcement")
      .leftJoinAndSelect("announcement.images", "images")
      .leftJoinAndSelect("users.comments", "comment")
      .where("users.id = :id", { id: userId })
      .getOneOrFail();

    const resUser = (await returnUserShape.validate(user, {
      stripUnknown: true,
    })) as iResponseUser;

    return resUser;
  } catch (error) {
    throw new AppError("User not found", 404);
  }
};

export default retrieveUserService;
