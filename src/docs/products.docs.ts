/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints para la gestión de productos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Camiseta negra"
 *         price:
 *           type: number
 *           format: float
 *           example: 29.99
 *         description:
 *           type: string
 *           example: "Una camiseta cómoda de algodón"
 *
 *     PaginatedProducts:
 *       type: object
 *       properties:
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Product'
 *         countItems:
 *           type: integer
 *           example: 10
 *
 *     GetAllProductsRequest:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *         length:
 *           type: integer
 *           example: 10
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Obtener productos paginados
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetAllProductsRequest'
 *     responses:
 *       200:
 *         description: Lista paginada de productos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedProducts'
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener producto por ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
