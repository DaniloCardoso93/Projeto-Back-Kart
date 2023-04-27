import { Request, Response } from "express";
import { deleteUserService, getAllUserService, patchUserService, retrieveUserService, getProfileService, postUserService, postResetPasswordService, patchResetPasswordService } from "../services";




const getAllUserController = async (req:Request, res:Response):Promise<Response> => {
    const { pagination, users } = await getAllUserService(req)
    return res.status(200).json({...pagination, users:{...users}})
}

const getProfileController = async (req:Request, res:Response):Promise<Response> => {
    const data = await getProfileService(req.userId.id)

    return res.status(200).json(data)
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

const postResetEmailPasswordController = async (req:Request, res:Response):Promise<Response> => {
    console.log("to no controller")
    const {email} = req.body
    const {protocol} = req
    const host = req.get("host")

    await postResetPasswordService(email, protocol, host!)
    return res.json({message: "token send"})
}

const patchResetPasswordController = async (req:Request, res:Response) =>{
    const {password} = req.body
    const {token} = req.params

    await patchResetPasswordService(password, token)
    return res.json({message: "password change with sucess"})
}


export {
    getAllUserController,
    retrieveUserController,
    patchUserController,
    deleteUserController,
    postUserController,
    getProfileController,
    postResetEmailPasswordController,
    patchResetPasswordController
}