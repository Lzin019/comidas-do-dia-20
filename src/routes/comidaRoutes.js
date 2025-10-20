import { Router } from "express";
import * as ComidaController from './../controllers/comidaControllers.js'

const router = Router();

router.get("/", ComidaController.listarTodas)
router.get("/:id", ComidaController.listarUma)

export default router; 
