import { DataTypes, Sequelize } from 'sequelize'
import { Icomments } from '../interfaces'

export const MComments = (sequelize: Sequelize) => {
	const Comments = sequelize.define<Icomments>(
		'Comments',
		{
			productId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			tableName: 'comments',
			timestamps: true,
		}
	)

	return (): typeof Comments => Comments
}
