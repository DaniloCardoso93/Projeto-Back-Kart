import {Request, Response } from "express"
import { deleteAdvertiseService, getAllAdvertiseService, patchAdvertiseService, postAdvertiseService } from "../services";
import retrieveAdvertiseService from "../services/advertise/retrieveAdvertise.service";

const getAllAdvertiseController = async (
    req: Request,
    res: Response
  ):Promise<Response> => {
    const {pagination, announcement} = await getAllAdvertiseService(req);
    return res.status(200).json({...pagination, announcement:{...announcement}});
};


const postAdvertiseController = async (req: Request, res: Response):Promise<Response> => { 
  const data = await postAdvertiseService(req.body, req.userId.id); 
  return res.status(201).json(data);
};

const retrieveAdvertiseController = async (
  req: Request,
  res: Response
):Promise<Response> => {
  const data = await retrieveAdvertiseService(req.params.id);
  return res.status(200).json(data);
};


const patchAdvertiseController = async (req:Request, res:Response):Promise<Response> => {
  const data = await patchAdvertiseService(req.body, req.params.id);
  return res.status(200).json(data);
}

const deleteAdvertiseController = async (req:Request, res:Response):Promise<Response> => {
  await deleteAdvertiseService(req.params.id);
  return res.status(204).json();
}


export {
  getAllAdvertiseController,
  postAdvertiseController,
  retrieveAdvertiseController,
  patchAdvertiseController,
  deleteAdvertiseController
}