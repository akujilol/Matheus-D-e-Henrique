import { pool } from "../database/db.js";

export class MatService {
	constructor(database = pool) {
		this.database = database;
	}

	async listar() {
		const { rows } = await this.database.query(
			"SELECT * FROM materias_construcao ORDER BY id_material"
		);
		return rows;
	}

	async buscarPorId(id) {
		const { rows } = await this.database.query(
			"SELECT * FROM materias WHERE id_material = $1",
			[id]
		);
		return rows[0] ?? null;
	}

	async cadastrar({ nome, categoria, valor, unidade_medida}) {
		const { rows } = await this.database.query(
			`INSERT INTO materias (nome, categoria, valor, unidade_medida)
			 VALUES ($1, $2, $3, $4)
			 RETURNING *`,
			[nome, categoria, valor, unidade_medida,]
		);
		return rows[0];
	}

}
