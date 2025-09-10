const usuarios = [
    {
        nome:'Mateus',
        email:'mateus@gmail.com'
    }, 

     {
        nome:'Lucas',
        email:'lucas@gmail.com'
     },

    {
        nome:'Marcos',
        email:'marcos@gmail.com'

    },
    {
        nome:'João',
        email:'joão@gmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuário){ 
    usuarios.push(usuário);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario

}