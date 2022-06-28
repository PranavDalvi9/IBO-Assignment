const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

const ProductCount = (arr) => {
  const count = {};

  arr.forEach((e) => {
    count[e.productName] = (count[e.productName] || 0) + 1;
  });
  return count;
};
console.log(ProductCount(listOfProducts));
