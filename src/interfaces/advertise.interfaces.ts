export interface iAdvertiseResponse {
    id: string,
    brand: string,
    model: string,
    year: number,
    fuel: string,
    odometer: number,
    color: string,
    fipe: string,
    price: number,
    description: string,
    isPublished: boolean,
    createdAt: Date,
    updatedAt: Date,
    images: iImages[]
    comments:iComments[],
    user:{
        id:string,
        fullName:string,
        cpf:string,
        cellphone:string,
        email:string,
        bio:string,
        birthdate:string,
        isAdvertiser:boolean,
        createdAt:Date,
        updatedAt:Date,
        isActive:boolean,
    }
}

export interface iUser {
    id:string,
    fullName:string,
	cpf:string,
	cellphone:string,
	email:string,
	bio:string,
	birthdate:string,
    isAdvertiser:boolean,
    createdAt:Date,
    updatedAt:Date,
    isActive:boolean,
}

export interface iUpdateAdvertiseData {
    brand?: string,
    model?: string,
    year?: number,
    fuel?: string,
    odometer?: number,
    color?: string,
    fipe?: string,
    price?: number,
    description?: string,
    isPublished?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    images?: iImages[]
}

export interface iImages{
    img:string
}

export interface iComments{
    id:string,
    comment:string
}


export interface iPagination{
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    nextPage: number;
    previusPage: number;
}

export interface iListAdvertiseWithPage{
    pagination:iPagination
    announcement:iAdvertiseResponse[]
}