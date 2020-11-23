/*
* Types of variables in TypeScript
* */

// 1. Boolean
let isFetching: Boolean = false;

// 2. Number(both float and int)
let answer: Number = 42;

// 3. String
let sample: String = 'Just a sample string';

// 4. Array
// generic style
let ages: Array<Number> = [20, 19, 20, 18];
// common c-like style
let ids: Number [] = [1, 2, 8, 9, 12];

// 5. Tuple
const contact: [String, Number] = ["Pasha", 18];

// 6. Any
let dumpy: any = {};
dumpy = 53;

// 7. Function
function SayMyName(name: string): void {
    console.log(`Hello ${name}`)
}

// 8. Custom type
type Login = String;
type ID = String | Number;
const initial: ID = 2;
const secondary: ID = "5";

// 9. Null and Undefined

