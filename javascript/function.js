// Hàm
function showDialog() {
    alert('Hi xin chao cac bạn ');
}
// showDialog();

function writeLog(message, message2) {
    if (message)
        console.log(message)
    if (message2)
        console.log(message2)
}
// writeLog('Test', 'Test_2');

// arguments có viết nhiều element cùng lúc mà k cần đặt biến
function writeArg() {
    console.log(arguments)
}
// writeArg('Arg1', 'Arg2', 'Arg3')

function writeFor() {
    for (var param of arguments) {
        console.log(param)
    }
}
// writeFor('For1', 'For2', 'For3')

function writeFor2() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} `;
    }
    console.log(myString);
}
// writeFor2('For1', 'For2', 'For3')


// return trong hàm
function cong(a, b) {
    return a + b;
}
var sum = cong(2.5, 8);
// console.log(sum);

function ShowMessage(){
    function ShowMessage2(){
        console.log('MESS');
    }
    ShowMessage2();
}

// ShowMessage();


