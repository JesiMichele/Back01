const ProductManager = require("./productManager");

const producto = new ProductManager();

console.log(producto.addProduct(`Iphone`, `ProMax`, 1500, `htpps:/img1.com`, `j22`, 130));
console.log(producto.addProduct(`Notbook`, `Apple`, 2500, `htpps:/img2.com`, `s28`, 75));

console.log(producto.getProduct());
