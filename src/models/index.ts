import { Sequelize } from 'sequelize';
import { MUsers } from './user.model';
import { sequelize } from '../config/db.config'; // tu instancia real
import { MProducts } from './product.model';

// Función que permite inicializar modelos con cualquier instancia de Sequelize
export const modelsInit = (sequelize: Sequelize) => ({
  Users: MUsers(sequelize)(),
  Products: MProducts(sequelize)(),
});

// Instancia por defecto para el entorno real
export const db = modelsInit(sequelize);