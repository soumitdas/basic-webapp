let array = [1, 2, 3, 5, 7, 8, 9];

//Map
function mapFunc(el) {
  return el + 2;
}

let newArray1 = array.map(mapFunc);

// Filter
let newArray2 = array.filter((element) => {
  return element % 2 !== 0;
});

let result = array.reduce((prevValue, curValue) => {
  return prevValue + curValue;
});

console.log(newArray);
