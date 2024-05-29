const product = require('../model/product');


let products = [];

exports.getAllProducts = (req, res) => {
    res.send(products);
};

exports.createProduct = (req, res) => {
    const { name, description, price, quantity } = req.body;
    

    if (!name || !description || !price || price <= 0 || !quantity || quantity <= 0) {
        return res.send( "Todos los campos son obligatorios. O hay algun campo invalido." );
    }

    const newProduct = new product(name, description, price, quantity);

    products.push(newProduct);
    res.send("Producto creado exitosamente.");
};