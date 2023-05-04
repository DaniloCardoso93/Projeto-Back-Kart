export interface iComment {
    description:string
}


export interface iCommentResponse {
        user:{
            isActive: boolean,
            updatedAt: Date,
            createdAt: Date,
            isAdvertiser: boolean,
            birthdate: string,
            bio: string,
            email: string,
            cellphone: string,
            cpf: string,
            fullName: string,
            id: string,
        },
        announcement: {
            updatedAt: Date
            createdAt: Date
            isPublished: boolean
            description: string
            fipe: string
            color: string
            price: number
            odometer: number
            fuel: string
            year: number
            model: string
            brand: string
            id: string,
        },
        description:string,
        id:string,
}