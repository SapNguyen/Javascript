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

//Callback hell nó sẽ lồng nhau liên tục cái này được thực hiện 
//thì tiếp tục cái sau 
//Pyramid of doom
setTimeout(function() {
    console.log(1)
    setTimeout(function() {
        console.log(2)
        setTimeout(function() {
            console.log(3)
            setTimeout(function() {
                console.log(4)
            },1000)
        },1000)
    },1000)
},1000)

//Lý thuyết và cách hoạt động Promise
//Promise khái niệm sinh ra để sử lý các thao tác bất động bộ
//Trc khi có promise ta thường sử dụng callback
//thì dùng callback hell nó bị rối rắp khó nhìn
//nên giờ có Promise để có thể giải quyết vc đó 
//khắc phục callback hell
//để tạo ra 1 promise dùng từ khóa new tạo ra 1 promise
//trong contructor truyền 1 excutor function dạng hàm
//khi sử dụng promise đối tượng promise 
//sử dụng qua phương thức then or catch 
//đều nhận callback function 
//khi dùng callback nhiều quá thì dùng Promise cho gọn gàng hơn
var promise = new Promise(
    //Executor
    //resolve thành công, reject thất bại
    function(resolve,reject){
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        //resolve()
        //reject()
        resolve([
            {
                id:1,
                name:'Thế Anh'
            }
        ])
        reject('Có lỗi!')
    }
)
//then, catch, finally
promise.then(function(course){
    // nếu resolve thành công thì vào đây
    console.log(course)
})
promise.catch(function(error){
    //reject thất bại thì catch bắt lại thông báo lỗi
    console.log(error)
})
promise.finally(function(){
    //1 trong 2
    console.log('Done')
})
/*Promise có 3 trạng thái
Promise có 3 trạng thái:

Pending(không làm gì)
Fulfilled(nếu thành công)
Rejected(nếu thất bại)
*/

//Promise chain
promise
        .then(function(){
    // nếu resolve thành công thì vào đây
        return 1
        })
        .then(function(data){
        console.log(data)//data = 1 ở trên vì nó lấy giá trị cái trên
        return 2
        })
        .then(function(data){
        console.log(data)//data = 2 vì ở trên return ra 2
        })

//
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
    //vì tk mặc định sleep là resolve nên các cái sau đều resolve
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)//nếu không return 1 promise
        //thì tk sau được chạy luôn
        //còn nếu return promise thì tk sau phải đợi xong nó mới chạy

    })
    .then(function(){
        console.log(2)
        return sleep(1000)
    })
    .then(function(){
        console.log(3)
        return new Promise(function(reject){
            reject('có lỗi') // có thẻ đang đúng tự nhiên có lỗi
        })
    })
    .catch(function(err){
        console.log(err)
    })

    //dùng Promise 
    function notHell(value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    }
    
    notHell(1)
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            console.log(value + 1);
        });
    
    //Promise.resolve
    //Promise.reject
    //Promise.all
    var promise = new Promise(function(resolve){
        resolve('Thành công')
    })
    //cách 2 
    var promise = Promise.resolve('Thành công')

    //Promise.all
    var promise1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve([1])
        },2000)
    })  
    var promise2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },5000)
    })  
    Promise.all([promise1,promise2])//kết hợp 2 promise
        .then(function(result){
            var result1 = result[0]
            var result2 = result[1]
            console.log(result1.concat(result2))
        })

var users = [
    {
        id:1,
        name: 'Thế Anh'
    },
    {
        id:2,
        name: 'kayO'
    },
    {
        id:3,
        name: 'Ez'
    }
]
var comments = [
    {
        id:1,
        user_id:1,
        content: 'Hello'
    },
    {
        id:2,
        user_id:2,
        content: 'Hi'
    }
]

//1.Lấy comments
//2.Từ comments lấy ra user_id
//3.từ user_id lấy ra user tương ứng

//fake API

//Các kiến thức cần thiết
//Array
//Function,callBack
//Promise
//DOM
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}
getComments()
    .then(function(comments){
        var userIds = comments.map(function(){
            return commemt.user_id
        })
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    user: users,
                    comments: comments
                }
            })

    })
    .then(function(data){
        var commentBlock = document.querySelector('comment-block')
        var html = ''
        data.comments.forEach(function(commemt){
            var user = data.users.find(function(user){
                return user.id == commemt.user
            })
            html += `<li>${user.name}:${user.comments}</li>`
        })
        commentBlock.innerHTML = html
    })
function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            return resolve(result);
        })
    },1000)
}

//Fetch (lấy dữ liệu từ Backend trả về)
//Front-end xây dựng giao diện
//Back-end xây dựng logic xử lý(CSDL)


//API (URL)-> Application programing interface: Cổng giao tiếp giữa các phần mềm

//Backend -> API (URL) -> Fetch -> JSON/XML
//->JSON.parse -> Javascript types
//-> Render ra giao diện với HTML

var postAPI = 
'https://jsonplaceholder.typicode.com/posts'
//thằng backend sẽ đưa cho mình 1 link API để mình chuyển
//Từ API sang JSON -> sang Javascript types 
//Từ [] có thể -> HTML như ở trên
//Đều gọi qua API để lấy giữ liệu từ Backend

fetch(postAPI)
    .then(function(response){
        return response.json();
        //JSON.parse: từ JSON -> Javascript types
    })
    // .then(function(posts){
    //     console.log(posts);
    // })
    .then(function(posts){
        //posts này là lấy được về return ở trên là 
        //1 mảng [] vì then ở trên đã biến json thành mảng r
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <h2>${post.body}</h2>
            </li>`
        })//biến ra 1 mảng
        var html = htmls.join('')//html đang ở dạng chuỗi
        document.querySelector('post-block')//ở html đang là thẻ ul
            .innerHTML = html //ul innerHTMl là thêm dữ liệu html là html
    })
    .catch(function(err){
        console.log(err);//nếu mà bị lỗi thì nên có catch
    })

//Thư viện JSON server: API Server dùng để cho front-end muốn tạo API mà k có backend
var courseAPI = 'http://localhost:3000/courses'

fetch(courseAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(course){
        console.log(course)//trả ra mảng
    })





