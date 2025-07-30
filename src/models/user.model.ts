import { DataTypes, Sequelize } from 'sequelize'
import { IUser } from '../interfaces'

export const MUsers = (sequelize: Sequelize) => {
	const Users = sequelize.define<IUser>(
		'Users',
		{
			id: {
				type: DataTypes.INTEGER.UNSIGNED,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'users',
			timestamps: true,
		}
	)


	return (): typeof Users => Users
}