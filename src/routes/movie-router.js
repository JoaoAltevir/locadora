import { Router } from "express";
import movieController from "../controllers/movie-controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";
const router = Router();

router.post("/", jwtAuthenticator, movieController.store);
router.get("/", movieController.index);


export default router