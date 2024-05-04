// Mining dữ liệu từ mảng object

let data = [
    {
        name: "Nguyễn Văn A",
        age: 20,
        address: "Hà Nội"
    },
    {
        name: "Nguyễn Văn B",
        age: 25,
        address: "Hải Phòng"
    },
    {
        name: "Nguyễn Văn C",
        age: 30,
        address: "Đà Nẵng"
    }
]

//Lấy ra tất cả tên của các người trong data

let names = data.map((item) => item.name);

console.log(names);

//Lấy ra tất cả tuổi của các người trong data

let ages = data.map((item) => item.age);

console.log(ages);