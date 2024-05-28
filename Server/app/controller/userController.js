
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
    const newClient = new client(email, username, contact, creditnumber, password);
    clients.push(newClient);
    res.send('cliente agregado creado');
};
