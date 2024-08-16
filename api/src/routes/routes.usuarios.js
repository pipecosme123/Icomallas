import express from "express";
import { login, registrar_usuario } from "../controllers/controller.usuarios.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo!!");
})

app.post('/login', login);
app.post('/registrar', registrar_usuario);

export default app;
