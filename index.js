const allContacts = [
    {
        name: "Tom",
        phone: "123-456-7890"
    },
    {
        name: "Jerry",
        phone: "223-456-7890"
    },
    {
        name: "Oswald",
        phone: "323-456-7890"
    },
    {
        name: "Perry",
        phone: "73-456-7890"
    },
    {
        name: "Julio",
        phone: "913-456-7890"
    },
    {
        name: "Rick",
        phone: "63-456-7890"
    },
]

let displayedCount = 0;
const step = 2;

const showContacts = (contacts) => {
    const container = document.getElementById("contactList");
    for (const contact of contacts) {
        const { name, phone } = contact;
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <strong>${name}</strong><br>
            <p>${phone}</p>
        `;
        container.appendChild(card);
    }
}

const showMoreContacts = () => {
    const remaining = allContacts.slice(displayedCount, displayedCount + step);
    if (remaining.length === 0) {
        alert("No more contacts to show.");
        return;
    }
    showContacts(remaining);
    displayedCount += step;

}

function calculate() {
    const firstNumber = Number(document.getElementById("num1").value);
    const secondNumber = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let output;
    switch (operator) {
        case "-":
            output = firstNumber - secondNumber;
            break;
        case "+":
            output = firstNumber + secondNumber;
            break;
        case "*":
            output = firstNumber * secondNumber;
            break;
        case "/":
            output = firstNumber / secondNumber;
            break;
    }

    document.getElementById("result").textContent = output;
}

function day5() {
    const colors = ["red", "green", "blue", "yellow", "orange"];
    console.log("Color:", colors[0]);

    // const first = colors[0];
    // const second = colors[1];
    // const third = colors[2];

    //Destructuring - new feature in ES6
    const [first, second, third] = colors;

    console.log("First:", first,
        "Second:", second,
        "Third:", third);

    // Spread Operator = ...
    const numbers = [1, 2, 3, 4, 5];
    const moreNumbers = [...numbers, 6, 7, 8, 9, 10];
    console.log("Numbers:", numbers);
    console.log("More Numbers:", moreNumbers);

    //Rest in Array Destructuring
    // const colors = ["red", "green", "blue", "yellow", "orange"];
    const [firstOfColors, ...restOfColors] = colors;
    console.log("First of Colors:", firstOfColors);
    console.log("Rest of Colors:", restOfColors);

    // Object Destructuring
    // {
    //     key: value
    // }
    const person = {
        phone: "123-456-7890",
        name: "John",
        age: 30,
        city: "New York",
        occupation: "Developer"
    };

    const { name, ...rest } = person;

    console.log("Person:", person);
    console.log("Sensitive Info:", name);
    console.log("Rest of Person:", rest);

    const nums = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < 5; i = i + 1) {
        sum = sum + nums[i];
    }

    for (const num of nums) {
        sum = sum + nums[i];
    }
    console.log("Sum:", sum);

    // 1st iteration: i = 0, sum = 0 + 1 = 1
    // 2nd iteration: i= i+1 = 0+1 = 1, 1<5 ? true, sum = 1 + 2 = 3
    // 3rd iteration: i = 2, 2<5 ? true, sum = 3 + 3 = 6
    // 4th iteration: i = 3, 3<5 ? true, sum = 6 + 4 = 10
    // 5th iteration: i = 4, 4<5 ? true, sum = 10 + 5 = 15


}

function asynchronous() {
    console.log("Anand1");
    console.log("Anand2");
    setTimeout(() => {
        console.log("Anand3");
    }, 15000);

    //1. Calls a Stack: Keeps tracks of the function calls
    //2. When called a function, it goes to the stack asynchronous() == put in the stack
    //3. When the function is completed, it is removed from the stack == pop from the stack

    console.log("Anand4");
    console.log("Anand5");
}

//Promise = Object that represents the result of an asynchronous operation.
//State: 1. Pending// in progress, 2. Resolved - Success, 3. Rejected - failure

function promiseFunc() {
    document.getElementById("async").textContent = "Static Data Loaded Successfully. Backend Process Loading...";

    //Simulate ASYNC operation
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            const success = isEven(21); // Simulate success or failure
            const api = "https://akin.isEven.com/data?num=21";
            if (success) {
                resolve("Backend Data loaded successfully!");
            } else {
                reject("Backend Failed to load data.");
            }
        }, 3000);
    })

    promise
        .then(function (result) { // success callback
            document.getElementById("async").textContent = result;
        })
        .catch(function (error) { // failure callback
            document.getElementById("async").textContent = error;
        });
}

// async : function declared with async => ALWAYS returns a promise
// await : Pauses the function execution until the promise is resolved

async function asyncFunc() {
    const result = await isEven(20);
    console.log("Async Result:", result);
}

function isEven(num) {
    return num % 2 === 0;
}

// ECMAScript 6 - Standard that defines how JAVASCRIPT should Worker.

//const, let

//Number, Boolean, String, Object, Array, Function

// const key = 0;
// key = 0;
// key = "String"
// key = [1, 2, 3, 4, 5];


// let key1;
// console.log("Key 1:", key1);

// const key2 = 0;
// console.log("Key 2:", key2);

// const sum = (a, b) => {
//     return a + b;
// };

// ${}

//Destructuring
// const [a, b, c] = [1, 2, 3];
