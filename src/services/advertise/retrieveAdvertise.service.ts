import Announcement from "../../entities/announcement.entities";
import { AppError } from "../../errors";
import { announcementRepo } from "../../repositories";
import { returnedAnnouncementShape } from "../../schemas/advertise.schema";

const retrieveAdvertiseService = async (advertiseId: string): Promise<any> => {
  try {
    const advertise = await announcementRepo
      .createQueryBuilder("announcement")
      .leftJoinAndSelect("announcement.user", "user")
      .leftJoinAndSelect("announcement.images", "images")
      .leftJoinAndSelect("announcement.comments", "comment")
      .where("announcement.id = :id", { id: advertiseId })
      .getOneOrFail();

    const validateAnnouncement = await returnedAnnouncementShape.validate(
      advertise,
      {
        stripUnknown: true,
      }
    );

    return validateAnnouncement;
  } catch (error) {
    throw new AppError("Advertise not found!", 404);
  }
};

export default retrieveAdvertiseService;
