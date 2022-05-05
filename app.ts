function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

//let combineValues: Function = add;
let combineValues: (a: number, b: number) => number; //with this we say, that function return number, and accept 2 numbers as parameters.
console.log(combineValues(1, 2));

