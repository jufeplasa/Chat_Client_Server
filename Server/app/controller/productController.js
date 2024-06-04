const Product = require('../model/product');

let products = [];

exports.getAllProducts = (req, res) => {
    res.send(products);
};

exports.createProduct = (req, res) => {
    const { id, name, price, quantity, labels, url } = req.body;

    if (!id || !name || !price || price <= 0 || !quantity || quantity <= 0 || !url) {
        return res.status(400).send("Todos los campos son obligatorios o hay algún campo inválido.");
    }

    // Verificar si el ID ya existe
    const existingProduct = products.find(product => product.id === id);
    if (existingProduct) {
        return res.status(400).send("El ID proporcionado ya existe para otro producto.");
    }

    const newProduct = new Product(id, name, price, quantity, labels, url);

    products.push(newProduct);
    res.status(201).send("Producto creado exitosamente.");
};

exports.updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price, quantity, labels, url } = req.body;

    if (!name || !price || price <= 0 || !quantity || quantity <= 0 || !url) {
        return res.status(400).send("Todos los campos son obligatorios o hay algún campo inválido.");
    }

    // Verificar si el ID existe
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).send("No se encontró ningún producto con el ID proporcionado.");
    }

    products[productIndex] = new Product(productId, name, price, quantity, labels, url);

    res.send("Producto actualizado exitosamente.");
};

exports.deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex === -1) {
        return res.status(404).send("No se encontró ningún producto con el ID proporcionado.");
    }

    products.splice(productIndex, 1); // Se elimina el producto

    res.send("Producto eliminado exitosamente.");
};
