import { Model } from 'sequelize'

export interface IUser extends Model {
	id: number
	name: string
	email: string
	password: string
	createdAt?: Date
	updatedAt?: Date
}