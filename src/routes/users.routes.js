import { Router } from "express";
import cretateUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listedAllUserControlles from "../controllers/listedAllUsers.controllers";
import listedUserController from "../controllers/listedUser.controllers";
import updadeUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controllers";
import verifyEmail from "../middlewares/verifyEmail.middlewares";
import verifyId from "../middlewares/verifyId.middlewares";
import verifyLogin from "../middlewares/verifyLogin.middlewares";
import verifyToken from "../middlewares/verifyToken.middlewares";

const router = Router()

router.post("/",verifyEmail ,cretateUserController)
router.post("/login", verifyLogin, userLoginController)
router.get("/profile", verifyToken, listedUserController)
router.get("/", verifyToken, listedAllUserControlles)
router.patch("/:id", verifyToken, verifyId,  updadeUserController)
router.delete("/:id", verifyToken, verifyId,  deleteUserController)




export default router