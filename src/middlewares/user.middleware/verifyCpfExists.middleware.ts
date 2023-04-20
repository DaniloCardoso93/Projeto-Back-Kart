import { NextFunction, Request, Response } from "express";
import { userRepo } from "../../repositories";
import { AppError } from "../../errors";

const verifyCpfExists = async (req:Request, res:Response, next:NextFunction) => {

    const CpfExists = await userRepo
    .createQueryBuilder('users')
    .where('users.cpf = :cpf', { cpf: req.body.cpf })
    .getOne();

    if(CpfExists) throw new AppError("CPF already exists", 409)

    return next()
}

export default verifyCpfExists