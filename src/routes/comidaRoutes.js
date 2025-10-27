import { Router } from "express";
import * as ComidaController from './../controllers/comidaControllers.js'

const router = Router();

router.get("/", ComidaController.listarTodos);
router.get("/:id", ComidaController.listarUm);
router.post("/", ComidaController.criar);
router.delete("/:id", ComidaController.deletar);
router.put("/:id", ComidaController.atualizar);

export default router; 
