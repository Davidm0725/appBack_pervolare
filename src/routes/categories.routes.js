import { Router } from "express";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller";

const router = Router();

//Se define las rutas y los diferentes metodos de peticion
router.route('/categories')
  .get(getCategories)
  .post(createCategory)

router.route('/categories/:id')
  .put(updateCategory)
  .delete(deleteCategory)

export default router;