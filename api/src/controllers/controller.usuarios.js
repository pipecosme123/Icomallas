import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuarios.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { email: email.trim() } });
    if (!user) return res.status(400).send('Usuario no encontrado');

    const validPassword = await bcrypt.compare(password.trim(), user.password);
    if (!validPassword) return res.status(400).send('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id, nombre: user.nombre, email: user.email }, process.env.SECRET_KEY);
    res.json({ token });
  } catch (err) {
    res.status(500).send('Error en el login');
  }
}

export const registrar_usuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password.trim(), 10);

  try {
    const newUser = await Usuario.create({
      nombre: nombre.trim().toUpperCase(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).send('Error al registrar el usuario');
  }
} 