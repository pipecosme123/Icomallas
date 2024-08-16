// models/Usuario.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Cliente } from './Clientes.js';

export const Usuario = sequelize.define('usuarios', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: {
				msg: "El correo electónico suministrado no cumple con el estandar."
			}
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
},
	{
		timestamps: true
	}
);

Usuario.hasMany(Cliente, {
	foreignKey: 'usuarioID',
	sourceKey: "id"
});

Cliente.belongsTo(Usuario, {
	foreignKey: 'usuarioID',
	targetKey: "id"
});