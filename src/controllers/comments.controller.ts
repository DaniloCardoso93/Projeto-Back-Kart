import {Request, Response } from "express"
import { postCommentsService } from "../services"
import getAllCommentsService from "../services/comments/getAllComments.service"
import retrieveCommentsService from "../services/comments/retrieveComments.service"
import patchCommentsService from "../services/comments/patchComments.service"
import deleteCommentsService from "../services/comments/deleteComments.service"


const postCommentsController = async (req:Request, res:Response):Promise <Response> => {
    const data = await postCommentsService(req.body, req.announcement, req.user)
    return res.status(201).json(data)
}

const getAllCommentsController = async (req:Request, res:Response):Promise <Response> => {
    const {pagination, comments} = await getAllCommentsService(req)
    return res.status(200).json({...pagination, comments:{...comments}})
}

const retrieveCommentsController = async (req: Request, res:Response):Promise<Response> => {
    const data = await retrieveCommentsService(req.params.id)
    return res.status(200).json(data)
}

const patchCommentsController = async (req:Request, res:Response):Promise<Response> => {
    const data = await patchCommentsService(req.body, req.params.id)
    return res.json(200).json(data)
}

const deleteCommentsController = async (req:Request, res:Response):Promise<Response> => {
    await deleteCommentsService(req.params.id)
    return res.json(204).json()
}


export {
    postCommentsController,
    getAllCommentsController,
    retrieveCommentsController,
    patchCommentsController,
    deleteCommentsController
}