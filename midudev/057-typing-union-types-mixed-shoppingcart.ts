// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 057 ?

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

// 3. Define ShoppingCart that accepts both Product and Slipper
interface MixedShoppingCart {
  totalPrice: number;
  products: (Product | Slipper)[];
}

// 4. Create object implementing MixedShoppingCart
const cart: MixedShoppingCart = {
  totalPrice: 123,
  products: [
    {
      id: 5,
      name: "almonds",
      price: 7,
      quantity: 2,
    },
    {
      id: 19,
      name: "cristal slipper",
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
  // { id: 5, name: 'almonds', price: 7, quantity: 2 }
  // { id: 19, name: 'cristal slipper', price: 8, quantity: 2, size: 5 }
});
