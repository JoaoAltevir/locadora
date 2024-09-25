import { Router } from "express";
import movieController from "../controllers/movie-controller.js";
const router = Router();

router.post("/", movieController.store);
router.get("/", movieController.index);


export default router