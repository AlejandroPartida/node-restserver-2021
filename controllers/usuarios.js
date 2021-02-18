const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


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


const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardar en BD
    await usuario.save();

    res.json({ 
        result: 'Usuario creado con éxito',
        usuario 
    });

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