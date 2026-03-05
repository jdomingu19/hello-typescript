// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 056 Interface Extension and Specialized ShoppingCart

// 1. Define interface for Product
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Extend Product interface to create Slipper with extra property
interface Slipper extends Product {
  size: number;
}

// 3. Define ShoppingCart specialized for Slipper products
interface MagicShoppingCart {
  totalPrice: number;
  products: Slipper[];
}

// 4. Create object implementing MagicShoppingCart
const cart: MagicShoppingCart = {
  totalPrice: 123,
  products: [
    {
      id: 19,
      name: "cristal slipper",
      price: 7,
      quantity: 2,
      size: 5,
    },
    {
      id: 23,
      name: "black slipper",
      price: 8,
      quantity: 2,
      size: 5,
    },
  ],
};

// 5. Access property
console.log(cart.totalPrice); // 123

// 6. Iterate over products
cart.products.map((product) => {
  console.log(product);
  // { id: 19, name: 'cristal slipper', price: 7, quantity: 2, size: 5 }
  // { id: 23, name: 'black slipper', price: 8, quantity: 2, size: 5 }
});
