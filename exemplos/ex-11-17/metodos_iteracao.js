const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Monitor', price: 200 },
  { name: 'Keyboard', price: 50 },
  { name: 'Mouse', price: 30 },
];

// const result = products.forEach((product) => console.table(product));

const result = products.map((product) => {
  const newProduct = { ...product, price: product.price * 0.9 }; // spread operator
  return newProduct.price;
});

const result2 = products.filter((product) => product.price < 200);

const total = products.reduce((acc, { price }) => acc + price, 0);

console.table(result);
console.table(result2);
console.table(total);

const result3 = products
  .map((product) => {
    const newProduct = { ...product, price: product.price * 0.9 }; // spread operator
    return newProduct.price;
  })
  .filter((price) => price < 200)
  .reduce((acc, price) => acc + price, 0);

console.table(result3);
