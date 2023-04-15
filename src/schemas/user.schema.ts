import * as yup from "yup";

// Entrada

export const registerUser = yup.object().shape({
    fullName: yup.string().required(),
    cpf: yup.string().required(),
    cellphone: yup.number().required(),
    birthdate: yup.string().required(),
    password: yup.number().required(),
    email: yup.string().required(),
    bio: yup.string().required(),
    address: yup.object().shape({
        zipCode:yup.string().required(),
        street:yup.string().required(),
        city:yup.string().required(),
        state:yup.string().required(),
        number:yup.string().required(),
        complement:yup.string().notRequired(),
    })
});

export const addressShape = yup.object().shape({
    zipCode:yup.string().required(),
	street:yup.string().required(),
	city:yup.string().required(),
	state:yup.string().required(),
	number:yup.string().required(),
	complement:yup.string().notRequired()
})

export const updateUser = yup.object().shape({
    fullName: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    cellphone: yup.number().notRequired(),
    birthdate: yup.string().notRequired(),
    password: yup.number().notRequired(),
    email: yup.string().notRequired(),
    bio: yup.string().notRequired(),
});

// SAIDA - Estes schemas são usados para validar os dados que serão retornados para o front-end

export const returnShapeUser = yup.object().shape({
    id: yup.string().required(),
    fullName: yup.string().required(),
    cpf: yup.string().required(),
    cellphone: yup.string().required(),
    birthdate: yup.string().required(),
    email: yup.string().required(),
    bio: yup.string().required(),
    announcements:yup.array().required().of(yup.object().shape({
        announcement:yup.string().required()
    })),
    comments:yup.array().required().of(yup.object().shape({
        comment:yup.string().required()
    })),
    isAdvertiser: yup.boolean().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    isActive: yup.boolean().required(),
    address: yup.object().shape({
        id:yup.string().required(),
        zipCode:yup.string().required(),
        street:yup.string().required(),
        city:yup.string().required(),
        state:yup.string().required(),
        number:yup.string().required(),
        complement:yup.string().notRequired(),
    })
});

export const returnRegisterShapeUser = yup.object().shape({
    address: yup.object().shape({
        id:yup.string().required(),
        zipCode:yup.string().required(),
        street:yup.string().required(),
        city:yup.string().required(),
        state:yup.string().required(),
        number:yup.string().required(),
        complement:yup.string().notRequired(),
    }),
    isActive: yup.boolean().required(),
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    isAdvertiser: yup.boolean().required(),
    bio: yup.string().required(),
    email: yup.string().required(),
    birthdate: yup.string().required(),
    cellphone: yup.string().required(),
    cpf: yup.string().required(),
    fullName: yup.string().required(),
    id: yup.string().required(),
});