// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 05 ?

// ?
interface Hero {
  id: string;
  name: string;
  age: Number;
  greet: () => void;
}

// . ?
const link: Hero = {
  id: "1",
  name: "Link",
  age: 21,
  greet: function (): void {
    console.log(`Hello, this is ${this.name}!`);
  },
};

// . ?
const zelda: Hero = {
  id: "2",
  name: "Zelda",
  age: 19,
  greet: function (): void {
    console.log(`Hello, this is ${this.name}!`);
  },
};

// . ?
link.greet(); // Hello, this is Link!
zelda.greet(); // Hello, this is Zelda!

// ?
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// . ?
interface ShoppingCart {
  totalPrice: number;
  products: Product[];
}

// . ?
const cart1: ShoppingCart = {
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

// . ?
console.log(cart1.totalPrice); // 123

// . ?
cart1.products.map((product) => {
  console.log(product);
  // { id: 1, name: 'apple', price: 2, quantity: 3 }
  // { id: 5, name: 'almonds', price: 7, quantity: 2 }
});

// ?
interface Slipper extends Product {
  size: number;
}

// . ?
interface MagicShoppingCart {
  totalPrice: number;
  products: Slipper[];
}

// . ?
const cart2: MagicShoppingCart = {
  totalPrice: 456,
  products: [
    {
      id: 19,
      name: "cristal slipper",
      price: 46,
      quantity: 2,
      size: 5,
    },
    {
      id: 23,
      name: "black slipper",
      price: 7,
      quantity: 2,
      size: 5,
    },
  ],
};

// . ?
console.log(cart2.totalPrice); // 123

// . ?
cart2.products.map((product) => {
  console.log(product);
  // { id: 19, name: 'cristal slipper', price: 46, quantity: 2, size: 5 }
  // { id: 23, name: 'black slipper', price: 7, quantity: 2, size: 5 }
});

// ?
interface MixedShoppingCart {
  totalPrice: number;
  products: (Product | Slipper)[];
}

// . ?
const cart3: MixedShoppingCart = {
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
      price: 46,
      quantity: 2,
      size: 5,
    },
  ],
};

// . ?
console.log(cart3.totalPrice); // 123

// . ?
cart3.products.map((product) => {
  console.log(product);
  // { id: 5, name: 'almonds', price: 7, quantity: 2 }
  // { id: 19, name: 'cristal slipper', price: 46, quantity: 2, size: 5 }
});

// ?
interface ShoppingCartOperations {
  add: (cart: ShoppingCart, product: Product) => void;
  remove: (cart: ShoppingCart, id: number) => void;
  clear: (cart: ShoppingCart) => void;
}

const cart4: ShoppingCart = {
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

const cartOperations: ShoppingCartOperations = {
  add: function (cart: ShoppingCart, product: Product): void {
    cart.products.push(product);
    console.log(`${product} added`);
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

// . ?
cartOperations.add(cart4, { id: 5, name: "almonds", price: 7, quantity: 2 });
console.log(cart4.products);
// [object Object] added
// [
//   { id: 1, name: 'apple', price: 2, quantity: 3 },
//   { id: 5, name: 'almonds', price: 7, quantity: 2 }
// ]

// . ?
cartOperations.remove(cart4, 1);
console.log(cart4.products);
// 1 removed
// [ { id: 5, name: 'almonds', price: 7, quantity: 2 } ]

// . ?
cartOperations.clear(cart4);
console.log(cart4.products);
// ShoppingCart is empty
// []

// ?
interface ShoppingCartOperations2 {
  add(cart: ShoppingCart, product: Product): void;
  remove(cart: ShoppingCart, id: number): void;
  clear(cart: ShoppingCart): void;
}

const cart5: ShoppingCart = {
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

const cartOperations2: ShoppingCartOperations2 = {
  add: function (cart: ShoppingCart, product: Product): void {
    cart.products.push(product);
    console.log(`${product} added`);
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

// . ?
cartOperations2.add(cart5, { id: 5, name: "almonds", price: 7, quantity: 2 });
console.log(cart5.products);
// [object Object] added
// [
//   { id: 1, name: 'apple', price: 2, quantity: 3 },
//   { id: 5, name: 'almonds', price: 7, quantity: 2 }
// ]

// . ?
cartOperations2.remove(cart5, 1);
console.log(cart5.products);
// 1 removed
// [ { id: 5, name: 'almonds', price: 7, quantity: 2 } ]

// . ?
cartOperations2.clear(cart5);
console.log(cart5.products);
// ShoppingCart is empty
// []

// ?
interface ShoppingCartOperations3 {
  add: (cart: ShoppingCart, product: Product) => void;
  remove: (cart: ShoppingCart, id: number) => void;
}

// . ?
interface ShoppingCartOperations3 {
  clear: (cart: ShoppingCart) => void;
}

// . ?
const cartOperations3: ShoppingCartOperations3 = {
  add: (cart: ShoppingCart, product: Product) => {
    cart.products.push(product);
    console.log(`${product} added`);
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

const cart6: ShoppingCart = {
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

// . ?
cartOperations3.add(cart6, { id: 5, name: "almonds", price: 7, quantity: 2 });
console.log(cart6.products);
// [object Object] added
// [
//   { id: 1, name: 'apple', price: 2, quantity: 3 },
//   { id: 5, name: 'almonds', price: 7, quantity: 2 }
// ]

// . ?
cartOperations3.remove(cart6, 1);
console.log(cart6.products);
// 1 removed
// [ { id: 5, name: 'almonds', price: 7, quantity: 2 } ]

// . ?
cartOperations3.clear(cart6);
console.log(cart6.products);
// ShoppingCart is empty
// []
