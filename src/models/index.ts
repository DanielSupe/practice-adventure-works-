import { Sequelize } from 'sequelize';
import { MUsers } from './user.model';
import { sequelize } from '../config/db.config'; // tu instancia real
import { MProducts } from './product.model';
import { MComments } from './comments.model';

// Función que permite inicializar modelos con cualquier instancia de Sequelize
export const modelsInit = (sequelize: Sequelize) => {
  const Users = MUsers(sequelize)();
  const Products = MProducts(sequelize)();
  const Comments = MComments(sequelize)();

  // Relaciones
  Users.hasMany(Comments, {
    foreignKey: 'userId',
    as: 'comments',
  });

  Comments.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user',
  });

  Products.hasMany(Comments, {
    foreignKey: 'productId',
    as: 'comments',
  });

  Comments.belongsTo(Products, {
    foreignKey: 'productId',
    as: 'product',
  });

  return {
    Users,
    Products,
    Comments,
  };
};

// Instancia por defecto para el entorno real
export const db = modelsInit(sequelize);