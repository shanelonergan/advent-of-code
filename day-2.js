// PART ONE

let input = [
    1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,2,23,9,27,1,5,27,31,1,9,31,35,1,35,10,39,2,13,39,43,1,43,9,47,1,47,9,51,1,6,51,55,1,13,55,59,1,59,13,63,1,13,63,67,1,6,67,71,1,71,13,75,2,10,75,79,1,13,79,83,1,83,10,87,2,9,87,91,1,6,91,95,1,9,95,99,2,99,10,103,1,103,5,107,2,6,107,111,1,111,6,115,1,9,115,119,1,9,119,123,2,10,123,127,1,127,5,131,2,6,131,135,1,135,5,139,1,9,139,143,2,143,13,147,1,9,147,151,1,151,2,155,1,9,155,0,99,2,0,14,0
];

let example1 = [1, 1, 1, 4, 99, 5, 6, 0, 99]; // passing
let example2 = [2, 4, 4, 5, 99, 0]; // passing
let example3 = [2, 3, 0, 3, 99]; // passing

const testArr = arr => {
    // console.log(example1);
    // let counter = 0;

    // for (let [index, element] of arr.entries()) {
    //     let output;
    //     let indexToReplace

    //     console.log(counter, 'counter');
    //     console.log(arr);
    //     if (index % 4 === 0) {
    //         switch (element) {
    //             case 1:

    //                 output = arr[arr[counter + 1]] + arr[arr[counter + 2]];
    //                 console.log('add', element, output);
    //                 indexToReplace = arr[counter + 3]
    //                 console.log(indexToReplace, 'index to replace')
    //                 arr[arr[counter + 3]] = output
    //                 counter += 4;
    //                 // debugger
    //                 break;
    //             case 2:
    //                 output = arr[arr[counter + 1]] * arr[arr[counter + 2]];
    //                 console.log('multiply', element, output);
    //                 indexToReplace = arr[arr[counter + 3]]
    //                 console.log(indexToReplace, 'index to replace')
    //                 arr[arr[counter + 3]] = output
    //                 counter += 4;
    //                 // debugger
    //                 break;
    //             case 99:
    //                 console.log('break');
    //                 break;
    //             default:
    //                 console.log(element);
    //         }
    //     }

    //     if (element === 99) {
    //         counter = 0;
    //         break;
    //     }
    // }

    let position = 0
    while (input[position] !== 99) {
        const [op, num1Position, num2Position, outputPosition] = input.slice(position, position + 4)
        const num1 = input[num1Position]
        const num2 = input[num2Position]

        input[outputPosition] = op === 1 ? num1 + num2 : num1 * num2

        position += 4
    }

    console.log(input[0], 'solution')

};

testArr(example1);
console.log(example1, 'finished');

// wrong: 1, 12
