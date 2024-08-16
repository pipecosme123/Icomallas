import { Cliente } from "../models/Clientes.js";

export const createCliente = async (req, res) => {
  const { nit, razonSocial, correo, telefono, estado } = req.body;
  const usuarioID = req.user.id;

  try {
    const newClient = await Cliente.create({
      nit: nit.trim(),
      razonSocial: razonSocial.trim(),
      correo: correo.trim(),
      telefono: telefono.trim(),
      estado: estado.trim(),
      usuarioID
    });
    res.json(newClient);
  } catch (err) {
    res.status(500).send('Error al crear el cliente');
    console.log(err);
  }
};

export const consultarClientes = async (req, res) => {
  try {
    const clients = await Cliente.findAll({ where: { usuarioID: req.user.id }, order: [['id', 'ASC']] });
    res.json(clients);
  } catch (err) {
    res.status(500).send('Error al consultar los clientes');
    console.log(err);
  }
};

export const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nit, razonSocial, correo, telefono, estado } = req.body;

  try {
    const updatedClient = await Cliente.update({
      nit: nit.trim(),
      razonSocial: razonSocial.trim(),
      correo: correo.trim(),
      telefono: telefono.trim(),
      estado: estado.trim()
    },
      {
        where: {
          id,
          usuarioID: req.user.id
        }, returning: true
      }
    );
    res.json(updatedClient[1][0]);
  } catch (err) {
    res.status(500).send('Error al actualizar el cliente');
    console.log(err);
  }
};

export const borrarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await Cliente.destroy({ where: { id, usuarioID: req.user.id } });
    res.send('Cliente borrado');
  } catch (err) {
    res.status(500).send('Error al borrar el cliente');
    console.log(err);
  }
}