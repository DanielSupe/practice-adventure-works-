/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Endpoints para la gestión de comentarios
 */

/**
 * @swagger
 * /api/comments/createComment:
 *   post:
 *     summary: Crear un nuevo comentario
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - userId
 *               - content
 *             properties:
 *               productId:
 *                 type: integer
 *                 example: 1
 *                 description: ID del producto al que se asocia el comentario.
 *               userId:
 *                 type: integer
 *                 example: 5
 *                 description: ID del usuario que crea el comentario.
 *               content:
 *                 type: string
 *                 example: "Excelente producto, muy recomendado."
 *                 description: Contenido del comentario.
 *     responses:
 *       201:
 *         description: Comentario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Datos del comentario creado
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Error interno al crear el comentario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error creating comment"
 */
