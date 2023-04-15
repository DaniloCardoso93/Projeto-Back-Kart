import { Request, Response } from "express";
import { deleteUserService, getAllUserService, patchUserService, retrieveUserService } from "../services";
import postUserService from "../services/users/postUser.service";

const getAllUserController = async (req:Request, res:Response):Promise<Response> => {
    const { pagination, users } = await getAllUserService(req)
    return res.status(200).json({...pagination, users:{...users}})
}

const retrieveUserController = async (req:Request, res:Response):Promise<Response> =>{
    const data = await retrieveUserService(req.params.id)

    return res.status(200).json(data)
}

const postUserController = async (req:Request, res:Response):Promise<Response> => {
    const data = await postUserService(req.body)
    return res.status(201).json(data)
}

const patchUserController = async (req:Request, res:Response):Promise<Response> => {
    const data = await patchUserService(req.body, req.params.id)
    return res.status(200).json(data)
}

const deleteUserController = async(req:Request, res:Response):Promise<Response> => {
    await deleteUserService(req.params.id)
    return res.status(204).json()
}

export {
    getAllUserController,
    retrieveUserController,
    patchUserController,
    deleteUserController,
    postUserController,
}