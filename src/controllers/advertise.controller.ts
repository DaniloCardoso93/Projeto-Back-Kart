import {Request, Response } from "express"
import { deleteAdvertiseService, getAdvertiseByIdService, getAllAdvertiseService, patchAdvertiseService, postAdvertiseService } from "../services";
import Announcement from "../entities/announcement.entities";

const getAllAdvertiseController = async (
    req: Request,
    res: Response
  ) => {
    const {pagination, announcement} = await getAllAdvertiseService(req);
    return res.status(200).json({...pagination, announcement:{...announcement}});
};


const postAdvertiseController = async (req: Request, res: Response) => { 
  const data = await postAdvertiseService(req.body); 
  return res.status(201).json(data);
};

const getAdvertiseByIdController = async (
  req: Request,
  res: Response
) => {
  const data = await getAdvertiseByIdService(req.params.id);
  return res.status(200).json(data);
};


const patchAdvertiseController = async (req:Request, res:Response) => {
  const data = await patchAdvertiseService(req.body, req.params.id);
  return res.status(200).json(data);
}

const deleteAdvertiseController = async (req:Request, res:Response) => {
  await deleteAdvertiseService(req.params.id);
  return res.status(204).json();
}


export {
  getAllAdvertiseController,
  postAdvertiseController,
  getAdvertiseByIdController,
  patchAdvertiseController,
  deleteAdvertiseController
}