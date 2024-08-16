import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { sequelize } from "./src/config/db.js";
import routesUsuarios from "./src/routes/routes.usuarios.js";
import routesClientes from "./src/routes/routes.clientes.js";

import "./src/models/Clientes.js";
import "./src/models/Usuarios.js";

const app = express()
const PORT = 4000;
const corsOptions = {
	origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(routesUsuarios);
app.use('/clientes', routesClientes);

const main = async () => {
	try {
		await sequelize.sync();
		app.listen(PORT);
		console.log(`Servidor ejecutando en el puerto ${PORT}`);
	} catch (error) {
		console.log("Error al iniciar el servidor");
		console.log(error);
	}
}

main();