export interface iUser {
	id: string,
	fullName: string,
	cpf: string,
	cellphone: string,
	birthdate: string,
	password: string,
	email: string,
	bio: string,
	isAdvertiser: boolean,
	resetToken: null | string,
	createdAt: Date,
	updatedAt: Date,
	isActive: boolean
}




export interface iRegisterUser {
    fullName:string,
	cpf:string,
	cellphone:string,
	birthdate:string,
	password:string,
	email:string,
	bio:string,
	address: iAddress
}

export interface iResponseRegisterUser {
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
	address: iResponseAddress
}

export interface iAddress {
	zipCode:string,
	street:string,
	city:string,
	state:string,
	number:string
	complement?:string
}

export interface iResponseAnnouncements {
    id?:string,
    brand?:string,
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
	images?:iImages[]
}

export interface iImages {
	img?:string
}

export interface iResponseComments {
    id?:string,
    comment?:string
}

export interface iResponseAddress {
	id:string,
	zipCode:string,
	street:string,
	city:string,
	state:string,
	number:string
	complement?:string
}
export interface iResponseUser {
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
	address: iResponseAddress
    announcements:iResponseAnnouncements[],
    comments:iResponseComments[],
}
