const posteoModel = require("../models/posteosModels.js");

const listadoController = {
    getLista: async (req, res) => {
        try {
            const listaLibros = await posteoModel.findAll();
            res.json(listaLibros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = listadoController;