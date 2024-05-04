//Tạo class DemoClass
class DemoClass {
    constructor() {
        this.name = 'DemoClass';
    }
    //Phương thức showName
    showName() {
        console.log(this.name);
    }
}

//Tạo đối tượng từ class DemoClass
let demoClass = new DemoClass();
//Gọi phương thức showName
demoClass.showName();
//Output
//DemoClass
//Class


//Tạo class quản lý sinh viên phức tạp hơn, tạo kế thừa sinh viên từ class Student

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Phương thức showInfo
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

//Tạo class StudentManager kế thừa từ class Student
class StudentManager extends Student {
    constructor(name, age, address) {
        super(name, age);
        this.address = address;
    }
    //Phương thức showInfo
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}

//Tạo đối tượng từ class StudentManager
let studentManager = new StudentManager
    ('Nguyễn Văn A', 20, 'Hà Nội');
//Gọi phương thức showInfo
studentManager.showInfo();
//Output
//Name: Nguyễn Văn A, Age: 20, Address: Hà Nội


