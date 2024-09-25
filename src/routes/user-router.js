import { Router } from "express";
import { signup } from "../controllers/user-controller.js";
const router = Router();


/*
    CRUD USUÁRIO
*/
router.post("/signup", signup);
router.post("/login", /*Cria um token para o usuário */)


export default router