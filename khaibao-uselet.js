// Bài 1: Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML.
//
//     Biến i kiểu số nguyên, có giá trị là 10
//
// Biến f kiểu số thực, có giá trị là 20.5
//
// Biến b kiểu logic, có giá trị là true
//
// Biến s kiểu chuỗi, có giá trị là "Hà Nội".
//
//     Sử dụng hàm document.write() để viết kết quả ra màn hình.
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';
document.write('i='+i)
document.write('<br>')
document.write('f='+f)
document.write('<br>')
document.write('b='+b)
document.write('<br>')
document.write('s='+s)
document.write('<br>')
//Bài 2: Viết một đoạn mã Javascript, khai báo biến width chứa giá trị độ rộng của hình chữ nhật,
// biến height chứa giá trị chiều cao của hình chữ nhật.
// In ra màn hình diện tích của hình chữ nhật đó.
let width = 20;
let height = 10;
let area = width*height
document.write('Area='+area)
//Bài 3: Dùng hàm prompt() để nhập 2 số từ bàn phím, lưu vào 2 biến là a và b.
// Kiểm tra xem a có phải là bội số của b hay không (tức là a có chia hết cho b hay không).
// Hiển thị kết quả ra màn hình bằng cách sử dụng hàm alert().
let a = prompt('input')
let b = 3;
alert(a%3);
