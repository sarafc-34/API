import express from "express";
import {cadastrarSetor,
    listarTodos,
    buscarSetorPorId,
    deletarSetor,
    atualizarSetor} from "../controller/SetorController.js";

    const router = express.Router();

    router.post("/", cadastrarSetor)
    router.get("/", listarTodos)
    router.patch("/:indice", atualizarSetor )
    router.delete("/:indice", deletarSetor)
    router.get("/:indice", buscarSetorPorId)
    
    export default router;