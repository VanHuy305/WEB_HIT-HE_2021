// Làm việc với array

/*
1. toString
2. join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
*/
var languages = [
    'javascript',
    'PHP',
    'Ruby',
];
//1. toString biến đổi số thành kiểu string
console.log(languages.toString())

//2. join tương tự toString nhưng chèn thêm được phần tử
console.log(languages.join(' '))

//3. pop xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages.pop())
console.log(languages.pop())
console.log(languages)

//4. push thêm các phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(languages.push('Dart', 'Java'))
console.log(languages)

//5. shift xóa element ở đầu mảng và trả về phẩn tử đã xóa
console.log(languages.shift())
console.log(languages)

//6. unshift thêm phần tử vào đầu mảng và trả về độ dài mới
console.log(languages.unshift('Dart','Java'))
console.log(languages)

//7. splicing (splice()) xóa , cắt , chèn phần tử mới vào mảng
// languages.splice(vị trí đặt con trỏ, vị trí cần xóa, phần tử cần thêm)
// xóa
languages.splice(1 ,1 )
// chèn
languages.splice(1, 0, 'Dart')
console.log(languages)

//8. concat nối array
var languages2 = [
    'Dart',
    'Java'
];
console.log(languages.concat(languages2))
console.log(languages2.concat(languages))

// 9. slicing (slice()) cắt 1 hoặc vài element và trả về các element đó
 //slice(vị trí bắt đầu cắt, vị trí dừng cắt)
console.log(languages.slice(1,3))
console.log(languages)