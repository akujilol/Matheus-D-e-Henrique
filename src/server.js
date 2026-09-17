import express from "express";
import routes from "./Routes/routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensagem: "API de materias de contrução" });
});

app.use("/materiais",routes);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(port, () =>{
    console.log(`API rodando em: http://localhost:${port}`)
})