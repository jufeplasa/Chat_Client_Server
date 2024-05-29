const Product = require('../model/product');

let products = [];

exports.getAllProducts = (req, res) => {
    res.send(products);
};

exports.createProduct = (req, res) => {
    const { id, name, description, price, quantity } = req.body;

    if (!id || !name || !description || !price || price <= 0 || !quantity || quantity <= 0) {
        return res.send("Todos los campos son obligatorios o hay algún campo inválido.");
    }

    // Verificar si el ID ya existe
    const existingProduct = products.find(product => product.id === id);
    if (existingProduct) {
        return res.send("El ID proporcionado ya existe para otro producto.");
    }

    const newProduct = new Product(id, name, description, price, quantity);

    products.push(newProduct);
    res.send("Producto creado exitosamente.");
};

exports.updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, description, price, quantity } = req.body;

    if (!name || !description || !price || price <= 0 || !quantity || quantity <= 0) {
        return res.send("Todos los campos son obligatorios o hay algún campo inválido.");
    }

    // Verificar si el ID existe
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.send("No se encontró ningún producto con el ID proporcionado.");
    }

    products[productIndex] = new Product(productId, name, description, price, quantity);

    res.send("Producto actualizado exitosamente.");
};

exports.deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex === -1) {
        return res.send("No se encontró ningún producto con el ID proporcionado.");
    }

    products.splice(productIndex, 1); // Se elimina el producto

    res.send("Producto eliminado exitosamente.");
};