import { DataTypes, Sequelize } from 'sequelize';
import { IProduct } from '../interfaces';

export const MProducts = (sequelize: Sequelize) => {
  const Products = sequelize.define<IProduct>(
    'Products',
    {
      ProductKey: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ProductAlternateKey: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      ProductSubcategoryKey: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      WeightUnitMeasureCode: {
        type: DataTypes.CHAR(3),
        allowNull: true,
      },
      SizeUnitMeasureCode: {
        type: DataTypes.CHAR(3),
        allowNull: true,
      },
      EnglishProductName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      SpanishProductName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      FrenchProductName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      StandardCost: {
        type: DataTypes.DECIMAL(19, 4), // money
        allowNull: true,
      },
      FinishedGoodsFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Color: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      SafetyStockLevel: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ReorderPoint: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ListPrice: {
        type: DataTypes.DECIMAL(19, 4), // money
        allowNull: true,
      },
      Size: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      SizeRange: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      DaysToManufacture: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ProductLine: {
        type: DataTypes.CHAR(2),
        allowNull: true,
      },
      DealerPrice: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
      },
      Class: {
        type: DataTypes.CHAR(2),
        allowNull: true,
      },
      Style: {
        type: DataTypes.CHAR(2),
        allowNull: true,
      },
      ModelName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      LargePhoto: {
        type: DataTypes.BLOB('long'), // URL de imagen
        allowNull: true,
      },
      EnglishDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      FrenchDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      ChineseDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      ArabicDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      HebrewDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      ThaiDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      GermanDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      JapaneseDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      TurkishDescription: {
        type: DataTypes.STRING(400),
        allowNull: true,
      },
      StartDate: {
        type: 'datetime' as any,
        allowNull: true,
      },
      EndDate: {
        type: 'datetime' as any,
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
    },
    {
      tableName: 'DimProduct',
      timestamps: false,
    }
  );

  return (): typeof Products => Products;
};