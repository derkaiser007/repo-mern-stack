import express from 'express'

import {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
  } from "../controllers/orderController.js";

import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();
  
router.route("/order/new").post(isAuthenticatedUser, newOrder);  
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);  
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
  
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);  
router.route("/admin/order/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
router.route("/admin/order/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);
  
export default router;