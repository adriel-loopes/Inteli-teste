const products = require('../data/products.json');

class ProductModel {
    static getAll() {
        return products;
    }
}

module.exports = ProductModel;
