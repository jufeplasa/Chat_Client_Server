
const client= require('../model/client');

let clients = []

exports.getAllUsers = (req, res) => {
    res.send('Lista de usuarios');
};

exports.getAllClients = (req, res) => {

    res.send(clients);
};

exports.createUser = (req, res) => {
    res.send('Usuario creado');
};

exports.addClient = (req, res) => {
    const { email, username, contact, creditnumber, password } = req.body;
    if (existData(email,"email")){
        res.send('Error, el correo ya se encuentra registrado.');
    }
    else if(existData(username,"username")){
        res.send('Error, el usuario ya se encuentra en uso.');
    }
    else{
        const newClient = new client(email, username, contact, creditnumber, password);
        clients.push(newClient);
        res.send('cliente agregado creado');
    }
  
};

function existData(value,param){
    let exist=false;
    for (let i = 0; i < clients.length; i++) {
       if(value===clients[i][param]){
        exist=true;
        return exist;
       }
    }
    return exist;
}