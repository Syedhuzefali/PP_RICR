import express from "express";

import  {userSignup,userLogin,userCheck,userDelete,userLogout,userReset,userUpdate} from "../controllers/user.controller.js";

import {userLog,confirmUser} from "../middleware/user.middleware.js";


const route = express.Router();

route.post("/signup",userLog, userSignup);
route.post("/login", userLog, userLogin);
route.post("/logout", userLog, confirmUser, userLogout);
route.put("/reset", userLog,confirmUser, userReset);
route.put("/update", userLog,confirmUser, userUpdate);
route.delete("/delete", userLog,confirmUser, userDelete);
route.get("/check", userLog,confirmUser, userCheck);



export default route;