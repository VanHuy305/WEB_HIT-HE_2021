setTimeout(function() {
    // prompt('Mời bạn nhập mật khẩu');
}, 1000);

// var a = 1;
// var b = 2;
// var c = 4;
// console.log(typeof a)

var myObject = {
    name: 'Văn Huy',
    age: 19,
    adress: 'Ha Noi'
};
// console.log('myObject', myObject);

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];
// console.log(myArray);


// toString biến đổi số thành kiểu string
// var age = 18;
var myString = age.toString();
// console.log(myString);

var myString = age.toFixed();
// toFixed tương tự toString nhưng nó làm tròn số thập phân

// tạo mảng
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function () {

    },
    {},
    123
];
// Kiểm tra là mảng hay object
// console.log(Array.isArray(languages));
// console.log(Array.isArray({}));

//Tính độ dài mảng
// console.log(languages,length);

// Lấy phần tủ theo yêu cầu
// console.log(languages[2]);

// chuỗi
var firsName = 'Huy';
var lastName = 'Văn';
// console.log(`Toi la: ${lastName} ${firsName}`)
// console.log('Toi la: ' + lastName + ' ' + firsName)
