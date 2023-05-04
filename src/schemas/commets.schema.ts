import * as yup from "yup"


export const registerCommentsShape = yup.object().shape({
    description:yup.string().required(),
})

export const responseRegisterCommentsShape = yup.object().shape({
    user:yup.object().shape({
        isActive: yup.boolean().required(),
        updatedAt: yup.date().required(),
        createdAt: yup.date().required(),
        isAdvertiser: yup.boolean().required(),
        birthdate: yup.string().required(),
        bio: yup.string().required(),
        email: yup.string().required(),
        cellphone: yup.string().required(),
        cpf: yup.string().required(),
        fullName: yup.string().required(),
        id: yup.string().required(),
    }),
    announcement:yup.object().shape({
        updatedAt: yup.date(),
        createdAt: yup.date(),
        isPublished: yup.boolean(),
        description: yup.string(),
        fipe: yup.string(),
        color: yup.string(),
        price: yup.number(),
        odometer: yup.number(),
        fuel: yup.string(),
        year: yup.number(),
        model: yup.string(),
        brand: yup.string(),
        id: yup.string().required(),
    }),
    updatedAt: yup.date(),
    createdAt: yup.date(),
    description:yup.string().required(),
    id:yup.string().required(),
})

export const responseArrayCommentsShape = yup.array().of((yup.object().shape({
    user:yup.object().shape({
        isActive: yup.boolean().required(),
        updatedAt: yup.date().required(),
        createdAt: yup.date().required(),
        bio: yup.string().required(),
        email: yup.string().required(),
        cellphone: yup.string().required(),
        fullName: yup.string().required(),
        id: yup.string().required(),
    }),
    announcement:yup.object().shape({
        updatedAt: yup.date(),
        createdAt: yup.date(),
        isPublished: yup.boolean(),
        description: yup.string(),
        fipe: yup.string(),
        color: yup.string(),
        price: yup.number(),
        odometer: yup.number(),
        fuel: yup.string(),
        year: yup.number(),
        model: yup.string(),
        brand: yup.string(),
        id: yup.string().required(),
    }),
    description:yup.string().required(),
    id:yup.string().required(),
})))
