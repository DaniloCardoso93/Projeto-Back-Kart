export interface iAdvertiseResponse {
    id: string,
    brand: string,
    model: string,
    year: string,
    fuel: string,
    odometer: string,
    color: string,
    fipe: string,
    price: string,
    description: string,
    isPublished: boolean,
    createdAt: Date,
    updatedAt: Date,
    images: iImages[]
}

export interface iUpdateAdvertiseData {
    brand?: string,
    model?: string,
    year?: string,
    fuel?: string,
    odometer?: string,
    color?: string,
    fipe?: string,
    price?: string,
    description?: string,
    isPublished?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    images?: iImages[]
}

export interface iImages{
    img:string
}