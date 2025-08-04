import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/response";
import { StatusCodes } from "http-status-codes";
import { getAllProductsDTO, productServices } from "../interfaces/products.interface";

module.exports = (productsServices: productServices)=>{

    const getAllProducts = async (req: Request, res: Response) => {
        try {
            const { page = 1, length = 10 }:getAllProductsDTO = req.body;
            const products = await productsServices.findAllProducts(page, length);
            
            return sendSuccess(res, {products:products, countItems: products.length},StatusCodes.OK);
        } catch (error) {
            return sendError(res,"Error getting products" ,StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    const getProductById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const product = await productsServices.findProductById(Number(id));
            if (!product) {
                return sendError(res, "Product not found", StatusCodes.NOT_FOUND);
            }
            return sendSuccess(res, product,StatusCodes.OK);
        } catch (error) {
            return sendError(res, "Error getting product", StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }



//----------------------Return------------------------------------------------------
    return{
        getAllProducts,
        getProductById,
    }

}