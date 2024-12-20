import express from "express";
import { verifyJwt } from "../middlewears/verifyJwt";
import {
  connectWallet,
  deleteUser,
  getUsers,
  login,
  signUp,
  updateProfile,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", signUp);
userRouter.post("/connect", verifyJwt, connectWallet);
userRouter.get("/users-list", verifyJwt, getUsers);
userRouter.post("/update-profile", verifyJwt, updateProfile);
userRouter.post('/delete', verifyJwt, deleteUser)

export default userRouter;
