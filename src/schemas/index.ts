import * as yup from "yup"

export const SchemaPadrao = {
    name:yup.string().required(),
    email:yup.string().required()
}
