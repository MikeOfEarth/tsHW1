// // Homework Exercises

// // 1. For each of these values, what type will the TypeScript compiler infer?
// let a = 118;
// // A: number

// let b = 'Thieves';
// // A: string

// let c = [true, false, false];
// // A:boolean[] or Array<boolean>

// let d = {age: number};
// // A:{age:number} object

// let e = [3]
// // A: number[] or Array<number>

// let f;
// // A:undefined

// let g = []
// // A:any[]





// // 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// // A:releaseYear not defined

let prices = [100, 200, 300];
prices[0] = '$100';
// // A:Type string not assignable type number

function myFunc(a: number, b: number): number {}
// // A:must return a value