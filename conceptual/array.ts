const carMakers: string[] = ['Ford', 'Toyota', 'GM'];

const carsByMake = [['f150'], ['corolla'], ['cruze']];

for (var car of carMakers) {
  console.log(car);
}

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(
  numbers.map((n: number): string => {
    return String(n);
  })
);

