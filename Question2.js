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

function getProductCount(listOfProducts) {
  let ans = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    CheckData(ans, listOfProducts[i]);
  }
  console.log(ans);
}

function CheckData(arr, el) {
  let index = arr.findIndex((item) => item.productName === el.productName);

  if (index === -1) {
    arr.push(el);
  } else {
    arr[index].quantity += el.quantity;
  }
  return arr;
}
getProductCount(listOfProducts);
