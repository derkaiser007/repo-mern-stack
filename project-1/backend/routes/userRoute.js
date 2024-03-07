import express from 'express'
import { loginUser, registerUser, logoutUser, forgotPassword, resetPassword, getUserDetails, 
    updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, 
    deleteUser } from '../controllers/userController.js'
import { isAuthenticatedUser, authorizeRoles  } from '../middleware/auth.js'
const router = express.Router()

router.route('/user/register').post(registerUser)
router.route('/user/login').post(loginUser)
router.route('/user/logout').get(logoutUser)

router.route("/user/password/forgot").post(forgotPassword);
router.route("/user/password/reset/:token").put(resetPassword);

router.route("/user/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/user/me").get(isAuthenticatedUser, getUserDetails);
router.route("/user/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/details/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
router.route("/admin/user/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
router.route("/admin/user/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

export default router