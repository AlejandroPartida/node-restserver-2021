const Role = require("../models/role");
const Usuario = require("../models/usuario");


const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD `)
    }
}

// Verificar si el correo existe
const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`Ya existe un usuario con el correo ${correo}`);
    }
}


const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`No existe un usuario con el ID ${id}`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}

