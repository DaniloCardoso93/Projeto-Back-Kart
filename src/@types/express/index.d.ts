import { boolean, date } from "yup";

declare global{
    namespace Express{
        interface Request{
            address:{
                id: string
                zipCode?: string,
                street?: string
                city?: string
                state?: string
                number?: string
                complement?: string | null,
            },
            announcement:{
                id: string,
                brand?: string,
                model?: string
                year?: number,
                fuel?: string,
                odometer?: number,
                color?: string,
                fipe?: string,
                price?: number,
                description?: string,
                images?: [{
                    id?: string
                    img?: string
                }],
                isPublished?: boolean,
                createdAt?: Date,
                updatedAt?: Date
            },
            comment:{
                id: string
                description?: string,
                announcement?: string,
                user?: string,
            },
            user: {
                id: string,
                fullName?: string,
                cpf?: string,
                cellphone?: string,
                birthdate?: string,
                password?: string,
                email?: string,
                bio?: string,
                isAdvertiser?: boolean,
                createdAt?: Date,
                updatedAt?: Date,
                isActive?: boolean
                address:{
                    id: string
                    zipCode?: string,
                    street?: string
                    city?: string
                    state?: string
                    number?: string
                    complement?: string | null,
                },
                announcement?:[{
                    id: string,
                    brand?: string,
                    model?: string
                    year?: number,
                    fuel?: string,
                    odometer?: number,
                    color?: string,
                    fipe?: string,
                    price?: number,
                    description?: string,
                    images?: [{
                        id?: string
                        img?: string
                    }],
                    isPublished?: boolean,
                    createdAt?: Date,
                    updatedAt?: Date
                }],
                comment?:[{
                    id: string
                    description?: string,
                    announcement?: string,
                    user?: string,
                }],
            };
        }
    }
}


export default global