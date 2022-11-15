const { response } = require("express");

const usuariosGet = (req, res = response) => {

    const { nombre="x", apikey="0000", page=1, limit=10 } = req.query;

    res.json({
        "msg": "get api - controller",
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(403).json({
        "msg": "post api - controller",
        nombre,
        edad
    })
}
const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(403).json({
        "msg": "put api - controller",
        id
    })
}
const usuariosPatch = (req, res = response) => {

    res.status(403).json({
        "msg": "patch api - controller"
    })
}
const usuariosDelete = (req, res = response) => {

    res.status(403).json({
        "msg": "delete api - controller"
    })
}

module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete
}