import express from "express";
import { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct,
    createProductReview, getProductReviews, deleteReview } from "../controllers/productController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router()

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)
router.route('/products').get(getAllProducts)
router.route('/product/:id').get(getProductDetails)
router.route('/admin/product/update/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
router.route('/admin/product/delete/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

router.route("/review/create-update").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/review/delete").delete(isAuthenticatedUser, deleteReview);

export default router
