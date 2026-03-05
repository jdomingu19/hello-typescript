// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 060 Interface Merging for ShoppingCart Operations

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

// 3. First declaration of ShoppingCartOperations
interface ShoppingCartOperations {
  add: (cart: ShoppingCart, product: Product) => void;
  remove: (cart: ShoppingCart, id: number) => void;
}

// 4. Second declaration of ShoppingCartOperations (merged automatically)
interface ShoppingCartOperations {
  clear: (cart: ShoppingCart) => void;
}

// 5. Implement merged ShoppingCartOperations
const cartOperations: ShoppingCartOperations = {
  add: (cart: ShoppingCart, product: Product) => {
    cart.products.push(product);
    console.log(`${product.name} added`);
  },
  remove: (cart: ShoppingCart, id: number) => {
    cart.products = cart.products.filter((product) => product.id !== id);
    console.log(`${id} removed`);
  },
  clear: (cart: ShoppingCart) => {
    cart.products = [];
    console.log("ShoppingCart is empty");
  },
};

// 6. Create ShoppingCart object
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

// 7. Add product
cartOperations.add(cart, { id: 5, name: "almonds", price: 7, quantity: 2 }); // almonds added
console.log(cart.products);
// [
//   { id: 1, name: 'apple', price: 2, quantity: 3 },
//   { id: 5, name: 'almonds', price: 7, quantity: 2 }
// ]

// 8. Remove product
cartOperations.remove(cart, 1); // 1 removed
console.log(cart.products); // [ { id: 5, name: 'almonds', price: 7, quantity: 2 } ]

// 9. Clear cart
cartOperations.clear(cart); // ShoppingCart is empty
console.log(cart.products); // []
