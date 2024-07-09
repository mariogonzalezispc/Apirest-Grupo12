const posteoModel = require("../models/posteosModels.js");

const listadoController = {
    getLista: async (req, res) => {
        try {
            const listaLibros = await posteoModel.findAll();
            res.json(listaLibros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteItem: async (req, res) => {
        try {
            const { id } = req.params;
            await posteoModel.destroy({ where: { id: id } });
            res.json({ message: "Registro Borrado Correctamente !!!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    addItem: async (req, res) => {
        try {
            const nuevoRegistro = await posteoModel.create(req.body);
            res.status(201).json(nuevoRegistro);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateItem: async (req, res) => {
        try {
            const { id } = req.params;
            await posteoModel.update(req.body, { where: { id: id } });
            res.json({ message: "Registro Actualizado Correctamente !!!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = listadoController;