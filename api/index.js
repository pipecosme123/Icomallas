import express from "express";
import morgan from "morgan";
import { sequelize } from "./src/config/db.js";
import routesUsuarios from "./src/routes/routes.usuarios.js";
import routesClientes from "./src/routes/routes.clientes.js";

import "./src/models/Clientes.js";
import "./src/models/Usuarios.js";

const app = express()
const PORT = 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use(routesUsuarios);
app.use('/clientes', routesClientes);

const main = async () => {
	try {
		// await sequelize.sync({ alter: true });
		app.listen(PORT);
		console.log(`Servidor ejecutando en el puerto ${PORT}`);
	} catch (error) {
		console.log("Error al iniciar el servidor");
		console.log(error);
	}
}

main();