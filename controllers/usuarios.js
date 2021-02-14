const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;


    res.json({
        result: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}


const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({ result: 'put API - controlador', id });
}


const usuariosPost = (req, res = response) => {


    const { nombre, edad } = req.body;

    res.json({ result: 'post API - controlador', nombre, edad });
}

const usuariosDelete = (req, res = response) => {
    res.json({ result: 'delete API - controlador' });
}

const usuariosPatch = (req, res = response) => {
    res.json({ result: 'patch API - controlador' });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}