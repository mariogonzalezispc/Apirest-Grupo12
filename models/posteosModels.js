const db = require("../data/db.js");
const  {DataTypes} = require("sequelize");
const PosteosModel = db.define('Libros', 
    {
        titulo:{type:DataTypes.STRING},
        autor:{type: DataTypes.STRING},
        año:{type: DataTypes.STRING},
        genero:{type: DataTypes.STRING},
        ultimaedicion:{type: DataTypes.STRING},
        idioma: {type: DataTypes.STRING},
    }
)

module.exports = PosteosModel;