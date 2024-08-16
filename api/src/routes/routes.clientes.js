import express from "express";
import { authenticarToken } from "../middleware/authenticarToken.js";
import { actualizarCliente, borrarCliente, consultarClientes, createCliente } from "../controllers/controller.clientes.js";

const app = express();

app.post('/crear', authenticarToken, createCliente);
app.get('/consultar', authenticarToken, consultarClientes);
app.put('/actualizar/:id', authenticarToken, actualizarCliente);
app.delete('/borrar/:id', authenticarToken, borrarCliente);

export default app;