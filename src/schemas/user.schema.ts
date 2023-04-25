import moment from "moment";
import * as yup from "yup";

// Entrada

export const registerUserShape = yup.object().shape({
    fullName: yup.string().required(),
    cpf: yup.string().required(),
    cellphone: yup.string().required(),
    birthdate: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
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

export const loginShape = yup.object().shape({
    email:yup.string().email().required(),
    password: yup.string().required(),
})

export const updateAddressShape = yup.object().shape({
    zipCode:yup.string().notRequired(),
	street:yup.string().notRequired(),
	city:yup.string().notRequired(),
	state:yup.string().notRequired(),
	number:yup.string().notRequired(),
	complement:yup.string().notRequired()
})

export const updateUserShape = yup.object().shape({
    fullName: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    cellphone: yup.number().notRequired(),
    birthdate: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().notRequired(),
    bio: yup.string().notRequired(),
});

// SAIDA - Estes schemas são usados para validar os dados que serão retornados para o front-end

export const returnUserShape = yup.object().shape({
    comments:yup.array().required().of(yup.object().shape({
        id:yup.string(),
        comment:yup.string()
    })),
    announcements:yup.array().required().of(yup.object().shape({
        images:yup.array().of(yup.object().shape({
            img:yup.string()
        })),
        updatedAt: yup.date(),
        createdAt: yup.date(),
        isPublished: yup.boolean(),
        description: yup.string(),
        fipe: yup.string(),
        price: yup.number(),
        color: yup.string(),
        odometer: yup.number(),
        fuel: yup.string(),
        year: yup.number(),
        model: yup.string(),
        brand: yup.string(),
        id: yup.string(),
    })),
    address: yup.object().required().shape({
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
    birthdate: yup.string().required(),
    bio: yup.string().required(),
    email: yup.string().required(),
    cellphone: yup.string().required(),
    cpf: yup.string().required(),
    fullName: yup.string().required(),
    id: yup.string().required(),
});


export const returnRegisterShapeUser = yup.object().shape({
    address: yup.object().required().shape({
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
    email: yup.string().email().required(),
    birthdate: yup.string().required(),
    cellphone: yup.string().required(),
    cpf: yup.string().required(),
    fullName: yup.string().required(),
    id: yup.string().required(),
});

export const updateResponseUserShape = yup.object().shape({
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

export const userArrayReturnedShape = yup.array().of(
    yup.object().shape({
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
    })
)