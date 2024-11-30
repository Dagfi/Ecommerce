import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";
import { verifyToken } from "../../middlewares/authMiddleware";

// products endpoints
const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken, validateData(createProductSchema), createProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
