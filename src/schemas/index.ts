import * as yup from "yup"

export const SchemaPadrao = {
    name:yup.string().required(),
    email:yup.string().required()
}


export const ReturnedPadrao = {
    user:yup.object().shape(SchemaPadrao).required(),
    updateAt:yup.date()
}