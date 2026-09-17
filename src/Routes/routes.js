import { Router } from "express";
import { MatService } from "../services/services.js";

const router = Router();
const materiasService = new MatService();


router.get("/", async (req, res, next) => {
	try {
		const materias = await materiasService.listar();
		res.json(materias);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const materia = await materiasService.buscarPorId(req.params.id);

		if (!materia) {
			return res.status(404).json({ erro: "Materia não encontrada" });
		}

		res.json(materia);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const materia = await materiasService.cadastrar(req.body);
		res.status(201).json(materia);
	} catch (error) {
		next(error);
	}
});


export default router;