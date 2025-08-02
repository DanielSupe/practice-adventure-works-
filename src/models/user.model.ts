import { DataTypes, Sequelize } from 'sequelize'
import { IUser } from '../interfaces'

export const MUsers = (sequelize: Sequelize) => {
	const Users = sequelize.define<IUser>(
		'Users',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(150),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(255),
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