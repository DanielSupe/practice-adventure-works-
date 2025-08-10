import { Router } from "express";
import authRoutes from "./auth.routes";
import productsRoutes from "./products.routes";
import commentRoutes from "./comment.routes";
const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productsRoutes);
router.use("/comments", commentRoutes);

export default router;