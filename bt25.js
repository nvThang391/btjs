//bt 1

function sum(...Args) {
  let total = 0;
  for (const arg of Args) {
    total += arg;
  }
  return total;
}
console.log(sum(2, 4, 6, 8, 9));

//bt2

Object.prototype.getCurrency = function (unit) {
  if (Array.isArray(this) || this.constructor.name === "Boolean") {
    return "Số không hợp lệ";
  } else if (this.trim().length === 0) {
    return "không được để trống";
    //người dùng để trống hoặc nhập khoảng trắng báo lỗi
  }

  var value = +this;
  console.log(value);
  if (
    Math.abs(value) === Infinity ||
    isNaN(value) ||
    typeof value !== "number"
  ) {
    return "Số không hợp lệ";
  }

  return value.toLocaleString("en-US") + " " + unit;
};

var price = "20000";
console.log(price.getCurrency("đ"));

//bt3
Array.prototype.push2 = function (...theArg) {
  for (let element of theArg) {
    arr[arr.length] = element;
  }
};
var arr = [1, 2];
arr.push2(3, 4, 5, "hello");
console.log(arr);

//bt4

// - Duyệt qua các phần tử của mảng ban đầu
// - Trả về 1 mảng mới
// - Giá trị phần tử mảng mới là các phần tử của mảng ban đầu nếu callback trả về true
// var users = ["User 1", "User 2", "User 3", "User 4"];
// var newArr = users.filter(function (user, index) {
//   //   console.log(user);
//   if (user === "User 2") {
//     return true;
//   }
// });
// console.log(newArr);
