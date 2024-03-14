class ProductManager {
    #products;

    static idProducto = 0;

    constructor() {
        this.#products = [];

    }

    addProduct(tittle, description, price, thumbnail, code, stock) {

        if (!tittle || !description || !price || !thumbnail || !code || !stock)
            return `Todos los parametros son solicitados[tittle,description,price,thumbnail,code,stock]`

        const codeExistente = this.#products.find(p => p.code == code);

        if (codeExistente)
            return `El codigo ${code}ya existe`

        ProductManager.idProducto = ProductManager.idProducto + 1;

        const id = ProductManager.idProducto;


        const newProduct = {
            id,
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.#products.push(newProduct);
        return `Producto agregado con exito!`
    }



    getProduct() {
        return this.#products
    }

    getProductById(id) {
        const producto = this.#products.find(p => p.id == id);

        if (producto)
            return producto;

        else
            return `Not Found`
    }
}


module.exports = ProductManager;