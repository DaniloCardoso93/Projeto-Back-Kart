export interface iRegisterUser {
    fullName:string,
	cpf:string,
	cellphone:string,
	birthdate:string,
	password:string,
	email:string,
	bio:string,
	address: {
		zipCode:string,
		street:string,
		city:string,
		state:string,
		number:string
		complement?:string
	}
}

export interface iAnnouncements {
    id:string,
    announcement:string
}

export interface iComments {
    id:string,
    comment:string
}


export interface iResponseUser {
    id:string,
    fullName:string,
	cpf:string,
	cellphone:string,
	birthdate:string,
	email:string,
	bio:string,
    announcements:iAnnouncements[],
    comments:iComments[],
	address: {
		zipCode:string,
		street:string,
		city:string,
		state:string,
		number:string
		complement?:string
	},
    isAdvertiser:boolean,
    createAt:Date,
    updatedAt:Date,
    isActive:boolean,
}