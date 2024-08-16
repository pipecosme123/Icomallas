// models/Cliente.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Cliente = sequelize.define('clientes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
);