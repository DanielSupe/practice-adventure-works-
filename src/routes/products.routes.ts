import { Router } from 'express';
import { controllers } from '../controllers';
const router = Router();
const {products} = controllers;

router.post("/", products.getAllProducts);
router.get("/:id", products.getProductById);

export default router;