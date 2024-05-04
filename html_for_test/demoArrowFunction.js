// Nhiều demo phức tạp về arrow function

//Demo arrow function and normal function
// Date: 02/01/2021



//Arrow function

let arrowFunction = () => {
    console.log("I am arrow function");
}

//Calling arrow function

arrowFunction();

//Cộng 2 số bằng arrow function

let add = (a, b) => {
    return a + b;
}

console.log(add(2, 3));

//Lấy ngày hiện tại 

let currentDate = () => {
    return new Date();
}

console.log(currentDate());

//Lấy ngày hiện tại bằng cách viết ngắn gọn hơn

let currentDateShort = () => new Date();

console.log(currentDateShort());

