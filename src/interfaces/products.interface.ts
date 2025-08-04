export interface productServices {
    findAllProducts(page: number, length: number): Promise<any>,
    findProductById(id: number): Promise<any>,
    // createProduct(productData: any): Promise<any>,
    // updateProduct(id: number, productData: any): Promise<any>,
    // deleteProduct(id: number): Promise<any>
}

export interface getAllProductsDTO {
    page: number;   
    length: number; 
}