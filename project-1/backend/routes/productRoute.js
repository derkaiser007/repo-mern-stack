import express from "express";
import { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct,
    createProductReview, getProductReviews, deleteReview } from "../controllers/productController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router()

router.route('/admin/create').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)
router.route('/').get(getAllProducts)
router.route('/:id').get(getProductDetails)
router.route('/admin/update/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
router.route('/admin/delete/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

export default router
