import { ModelStatic } from 'sequelize';
import { IProduct } from '../interfaces';
// import { env } from '../config/env';
module.exports = (ProductsModel: ModelStatic<IProduct>) => {

    const findAllProducts = async (page: number, length: number) => {

        const offset = (page - 1) * length;
        const products = await ProductsModel.findAll({
        limit: length,
        offset: offset
    });
    
        return products;
    }

    const findProductById = async (id: number) => {
        const product = await ProductsModel.findByPk(id,{
            include: [
                {
                    association: 'comments',
                    include: [
                    {
                        association: 'user',
                        attributes: ['id', 'name'] // solo traer id y name
                    }
                ]
                }
            ]
        });
        return product;
    }

    // const updateProduct = async (id: number, productData: Partial<IProduct>) => {

    // }

    // const createProduct = async (product: IProduct) => {
    //     const newProduct = await ProductsModel.create();
    //     return newProduct;
    // }

    return {
        findAllProducts,
        findProductById,
        // updateProduct,
        // createProduct
    }

}