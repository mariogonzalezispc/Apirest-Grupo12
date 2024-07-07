exports.deleteItem = (req, res) => {
    // Lógica para borrar un item existente
    res.send(`Item con ID ${req.params.id} borrado`);
};