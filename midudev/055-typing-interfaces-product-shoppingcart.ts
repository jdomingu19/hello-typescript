// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 055 Interfaces for Product and ShoppingCart

(() => {
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

  // 3. Create object implementing ShoppingCart
  const cart: ShoppingCart = {
    totalPrice: 123,
    products: [
      {
        id: 1,
        name: "apple",
        price: 2,
        quantity: 3,
      },
      {
        id: 5,
        name: "almonds",
        price: 7,
        quantity: 2,
      },
    ],
  };

  // 4. Access property
  console.log(cart.totalPrice); // 123

  // 5. Iterate over products
  cart.products.map((product) => {
    console.log(product);
    // { id: 1, name: 'apple', price: 2, quantity: 3 }
    // { id: 5, name: 'almonds', price: 7, quantity: 2 }
  });
})();
