export interface RegisterDTO {
    name: string
	email: string
	password: string
}

export interface LoginDTO {
	email: string
	password: string
}


export interface AuthServices {
    findUserByEmail(email: string): Promise<any>,
    createUser(user: RegisterDTO): Promise<any>,
    findUserById(id: number): Promise<any>
}
