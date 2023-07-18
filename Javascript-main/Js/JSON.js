//Quan trọng JSON
// JSON là 1 định dạng dữ liệu(chuỗi)
//JSON là JavaScript Object Notation
//JSON:String, Number,Boolean,Null,Array,Object
// Mã hóa/Giải mã
//Encode/decode
//Stringify(Từ Javascript sang JSON) / Parse (từ JSON -> JavaScript)

// var json = '["Javascript","PHP"]';
// var json = '{"name":"Thế Anh","age":18}'
//Biến JSON(chuỗi) thành Javascript
var json = '1';
var json = '"Thế Anh"';//chuỗi trong JSON là phải có ""
console.log(JSON.parse(a))
console.log(JSON.stringify({
    name: ' Thế Anh ',
    age:18
}))

//------------------------SYNC-------
//Promise
//-Sync: đồng bộ
//-Async: bất đồng bộ
//-Nỗi đau

//Sync- đồng bộ in ra cùng lúc cả 2 
//cái nào in ra trc thì ra trc theo 1 tuần tự
//bất đồng bộ cái nào viết sau mà in ra trước VD setTimeout
//setTimeout,setInterval,fetch,XMLHTTPRequest(bất đồng bộ), đọc file
//Request Animation frame
//CallBack
console.log(1)
console.log(2)




