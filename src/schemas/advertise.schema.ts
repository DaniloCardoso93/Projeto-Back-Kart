import * as yup from "yup";

// Entrada

export const registerAdvertise = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required().matches(/^[0-9\/]{0,9}$/, "O ano deve conter apenas números ou /, ex: 2020/2021"),
    fuel: yup.string().required(),
    odometer: yup.string().required(),
    color: yup.string().required(),
    fipe: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    isPublished: yup.boolean().required(),
});
export const updateAdvertise = yup.object().shape({
    brand: yup.string(),
    model: yup.string(),
    year: yup.string().matches(/^[0-9\/]{0,9}$/, "O ano deve conter apenas números ou /, ex: 2020/2021"),
    fuel: yup.string(),
    odometer: yup.string(),
    color: yup.string(),
    fipe: yup.string(),
    price: yup.string(),
    description: yup.string(),
    isPublished: yup.boolean(),
});

// SAIDA - Estes schemas são usados para validar os dados que serão retornados para o front-end

export const returnRegisterAdvertise = yup.object().shape({
    id: yup.string().required(),
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    odometer: yup.string().required(),
    color: yup.string().required(),
    fipe: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    isPublished: yup.boolean().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
});
export const returnUpdateAdvertise = yup.object().shape({
    id: yup.string().required(),
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    odometer: yup.string().required(),
    color: yup.string().required(),
    fipe: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    isPublished: yup.boolean().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
});