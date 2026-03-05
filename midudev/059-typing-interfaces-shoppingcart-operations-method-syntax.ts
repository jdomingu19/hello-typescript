// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 059 Alternative Interface Syntax for ShoppingCart Operations

// 1. Define interface for Product
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Define interface for ShoppingCart
interface ShoppingCart {
  totalPrice: number;
  products: Product[];
}

// 3. Define interface for ShoppingCart operations (method syntax)
interface ShoppingCartOperations {
  add(cart: ShoppingCart, product: Product): void;
  remove(cart: ShoppingCart, id: number): void;
  clear(cart: ShoppingCart): void;
}

// 4. Create ShoppingCart object
const cart: ShoppingCart = {
  totalPrice: 123,
  products: [
    {
      id: 1,
      name: "apple",
      price: 2,
      quantity: 3,
    },
  ],
};

// 5. Implement ShoppingCartOperations with method syntax
const cartOperations: ShoppingCartOperations = {
  add: function (cart: ShoppingCart, product: Product): void {
    cart.products.push(product);
    console.log(`${product.name} added`);
  },
  remove: function (cart: ShoppingCart, id: number): void {
    cart.products = cart.products.filter((product) => product.id !== id);
    console.log(`${id} removed`);
  },
  clear: function (cart: ShoppingCart): void {
    cart.products = [];
    console.log("ShoppingCart is empty");
  },
};

// 6. Add product
cartOperations.add(cart, { id: 5, name: "almonds", price: 7, quantity: 2 }); // almonds added
console.log(cart.products);
// [
//   { id: 1, name: 'apple', price: 2, quantity: 3 },
//   { id: 5, name: 'almonds', price: 7, quantity: 2 }
// ]

// 7. Remove product
cartOperations.remove(cart, 1); // 1 removed
console.log(cart.products); // [ { id: 5, name: 'almonds', price: 7, quantity: 2 } ]

// 8. Clear cart
cartOperations.clear(cart); // ShoppingCart is empty
console.log(cart.products); // []
