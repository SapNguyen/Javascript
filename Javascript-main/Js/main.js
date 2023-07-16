// 1.alert('Hi javascript!')

// 2.var fullName = 'Nguyen The Anh';
// var age = 21;


// alert(fullName);
// alert(age);

/**
 * 
 */

// 3. built-int hàm xây dựng sẵn chỉ lấy ra dùng
/**
 * Alert
 * Console in ra dùng chữ thông báo ở console
 * Confirm
 * Prompt xác nhận có thể nhập input
 * Set timeout cho 1 đoạn code được chạy sau 1 khoảng thời gian
 * Set interval giống time out nhưng sau 1 giây nó chạy liên tục
 */

// console.log('Day la 1 dong log')

// confirm('Xác nhận bạn đủ tuổi')

// prompt('Xác nhận bạn đủ tuổi')

// setTimeout(function () {
//  alert('Thông báo')
// },1000) 
// sau 1 giây thì thông báo dc chạy

// setInterval(function () {
//     alert('Thông báo'+Math.random)
// },1000)

// Toán tử Javascript
// 1.Toán tử số học 
// Toán tử gán 
// Toán tử so sánh 
// Toán tử logic

// function
var myFunction = function(){
    alert('Hi')
}

// Object types kiểu dữ liệu Object
var myObject = {
    name: 'Thế Anh',
    age:21,
    address:'Hà Nội',
    myFunction: function(){

    }
}
console.log('myObject',myObject)

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
]
console.log(typeof a)//kiểu gì

// == khách === == là sét chỉ số chứ k sét datatype

// !! giống booleand

// Hàm
// cách đặt tên hàm

/*
    a-z A-Z 0-9(k được đặt kí tự đầu tiên)
*/
function showDialog(){
    alert('hello')
}
showDialog()

function writeLog(message){
    console.log(message)
    //message tham số
}
writeLog('Test')//Test là đối số 

// Arguments
function writeLog(){
    console.log(arguments)
    //arguments giống như 1 mạng khi ta gọi ra
}

function writeLog(){
    var myString = ''
    for(var param of arguments) {
        myString +=  `${param} -`
    }
    // ${} để lấy được phần tử trong ''
    console.log(myString)
}

function showMessage(){
    console.log('Declaration function')
}
var showMessage2 = function(){
    console.log('Expression function')
}

var fullName = 'The anh la \'Sieu nhan \''

console.log(`Toi la ${fullName}`)

// chuỗi
// các phương thức và thuộc tính làm việc với chuỗi
/*
    1.length
    2.find index - console.log(sh.indexOf('JS')) - lastIndexOf - search
    3.cut string - console.log(sh.slice(4,6)) - cắt
    4.replace - console.log(sh.replace('JS', 'Javascript'))
    - console.log(sh.replace(/Js/g, 'Javascript'))
    - biểu thức chính quy(ghi đè tất cả các chữ JS)
    5.convert to upper case 
    toUpperCase()
    6.convert to lower case
    toLowerCase()
    7.trim lấy dữ liệu mà ví dụ ng dùng nhập thừa cách
    -bỏ khoảng trắng thừa 
    console.log(sh.trim())

    8.split 
    -cắt chuỗi 
    Ví dụ
    var languages = 'Js,PHP,Ruby'
    console.log(languegas.split(','))
    -tạo string thành array

    9.get a character by index - lấy được 1 kí tự
    const myS = 'The Anh'
    console.log(myS.charAt(0)) - lấy được T
    console.log(myS[0])
 */

    //Số
    /*
    Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
    Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
    Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
    Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
    Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
    Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
     */
    console.log(isNaN(result)) //kiếm tra xem số đấy có hợp lệ hay không
    console.log(age.toString())
    console.log(age.toFixed())//làm tròn số
    console.log(age.toFixed(2))//làm tròn 2 số sau số thập phân
    function isNumber(value){
        return typeof value == 'number' && !isNaN(value) ? true:false
    }
    //hàm có phải số number k

    //Mảng
    var languages = [
        'Javascript',
        'PHP',
        'Ruby',
    ]
    console.log(Array.isArray(languages))
    //lấy phần tử theo index
    console.log(languages[0])

    //Các cách làm việc với Array(phuong thuc)

    var languages = [
        'Javascript',
        'PHP',
        'Ruby',
    ]

    console.log(languages.toString())//chuyển array sang chuỗi
    console.log(languages.join(' - '))//chuyển array sang chuỗi

    //POP
    console.log(languages.pop())// xóa phần tử cuối và trả về ptu đã xóa

    //push thêm phần tử vào cuối mảng
    console.log(languages.push('dast'))

    //shift xóa phần tử ở đầu mảng
    console.log(languages.shift())

    //unshift thêm phần tử ở đầu mảng
    console.log(languages.unshift())

    //splicing xóa chèn cắt

    languages.splice(1,1)//xóa phần tử PHP vì PHP [1] và vế sau là 1 phần tử
    //chèn
    languages.splice(1,0,'Dart')

    //concat dùng để nối array
    var languages2 = [
        'Dart',
        'OS'
    ]
    console.log(languages.concat(languages2))

    //slicing cắt
    console.log(languages.slice(1,2))
    console.log(languages.slice(0)) //cpppy mảng

     //Object
     var myInfo = {
        name: 'Thế Anh',
        age: 18,
        address: 'Hà Nội,VN',
        [emailKey]: 'anh1502965',
        getName: function(){
            return this.name
        }
     }
     myInfo.email = 'anh1502965'
     console.log(myInfo.name)
     console.log(myInfo[address])

     var emailKey = 'email'
     
     //xóa 
     delete myInfo.email
     //Function --> Phương thức / method
     //Others --> Thuộc tính / property

     //Object constructor
     function User(firstName, lastName, avatar){
        this.firstName=firstName,
        this.lastName=lastName,
        this.avatar=avatar,
        this.getName = function(){
            return `${this.firstName} ${this.lastName}`
        }
     }
     var author = new User('The Anh','Anh','Avatar')
     author.title = 'Hi'
     var user = new User('The Anh','Anh','Avatar')
     user.comment= 'Hi'

     console.log(author)
     //Object prototype
     User.prototype.className = 'F8' //Thêm thuộc tính
     User.prototype.getClassName = function(){
        return this.className
     }//Thêm phương thức

     //Đối tượng Date
     var date = new Date();

     var year = date.getFullYear();

     var month = date.getMonth() + 1;
     var day = date.getDate();
     console.log(`${year} - ${month} - ${day}`)

     //Math object
     console.log(Math.PI)
     //round làm tròn số
     //abs giá trị tuyệt đối
     //ceil làm tròn trên
     //floor làm tròn dưới
     //random
     var random = Math.floor(Math.random() * 100 )
     var bonus = [
        '10 coin',
        '20 coin'
     ]
     console.log(bonus[random])

     //Ví dụ làm game
     if(random <50){
        console.log('Cường hóa thành công')
     }
     function getRandomItem(array){
        var random = Math.floor(Math.random())
        
        return array[random]
    }
     //min
     //max

     //if else
     //if(){}
     //else if(){}

     //switch
     switch (date){
        case 2:
            console.log('Hôm nay là thứ 2')
            break
        case 3:
            console.log('Hôm nay là thứ 3')
            break
        case 4:
        case 5:
            console.log('Hôm nay là thứ 4,5')
            break
        default:
            console.log('không biết')
     }
     //switch là biết trc giá trị còn if là dùng a>b so sánh tính đúng sai

     //toán tử 3 ngôi - ternary operator
     var course = {
        name: 'Javascript',
        coin:250
     }
    //  if(course.coin > 0){
    //     console.log(`${course.coin} Coins`)
    //  }
    //  else{
    //     console.log('Miễn phí')
    //  }

    var result = course.coin > 0 ? `${course.coin} Coins` : console.log('Miễn phí')
    console.log(result)//toán tử 3 ngôi là 3 vế 1.course... 2. sau ? 3. miễn phí

    var a= 1
    var b=2 

    var c = a>0 ? a : b 
    // Làm bài
    function getCanVoteMessage(age){
        return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
    }



    // Kỳ vọng
    console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
    console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

    //Vòng lặp
    /*
        1.for - lặp với đk đúng
        for (var i = 0; i <=1000; i++){
            console.log(i);
        }
        2.for/in- lặp qua key của đối đối tượng
        3.for/of - lặp qua value của đối tượng
        4.while - lặp khi điều kiện đúng
        5.do/while - lặp ít nhất 1 lần, sau đó lặp khi đk đúng
    */
        function getRandNumbers(min,max,length){
            var array = []
            for(var i=1;i<=length;i++){
                array.push(Math.random() * (max - min) + min)
            }
            return array
        }
        //tạo danh sách số ngẫu nhiên
        //Hàm tính tổng mảng
        function getTotal(arr) {
            var s = 0
            for(var i=0;i<arr.length;i++){
                s +=  arr[i]
            }
            return s
        }
        //Vừa kết hợp Mảng và Object
        var orders = [
            {
                name: 'Khóa học HTML - CSS Pro',
                price: 3000000
            },
            {
                name: 'Khóa học Javascript Pro',
                price: 2500000
            },
            {
                name: 'Khóa học React Pro',
                price: 3200000
            }
        ]
        function getTotal(orders){
            var s=0
            for (var i = 0;i<orders.length;i++){
                s+= orders[i].price
            }
            return s
        }

        //for in
        for(var key in oders){
            console.log(key)
            console.log(oders[key])
        }
        function run(object) {
            var arr = []
            for(var key in object){
                arr.push( `Thuộc tính ${key} có giá trị ${object[key]}`)
            }
            return arr
        }
        
        // Expected results:
        console.log(run({ name: 'Nguyen Van A', age: 16 }));

        //for of
        for(var key of orders){
            console.log(key)
        }
        var myInfo = {
            name: 'The Anh',
            age:18
        }
        for(var value of Object.keys(myInfo)){
            console.log(value)
        }

        //while
        var i = 0;
        while (i<1000){
            i++
            console.log(i)
        }


        //do while
        var i = 0
        do{
            i++
            console.log(i)
        }while(i<10)

        var isSuccess = false
        do{
            i++
            console.log('Nap the lan '+i)
            if(true){
                isSuccess=true;
            }
        }while(!isSuccess && i<3)

        //break continue 
        for(var i=0; i<10; i++){
            if(i%2!==0){
                continue;//nếu là số lẻ thì ngừng lại và tiếp tục số sau
            }
            console.log(i)
            if(i>=5){
                break
            }
        }

        //vòng lặp lồng nhau - Nested loop
        var myArray = [
            [1,2],
            [3,4],
            [5,6]
        ]
        for(var i=0; i<myArray.length; i++){
            for(var j=0; j<myArray[i].length; j++){
                console.log(myArray[i][j])
            }
        }
        for(i=100;i>=0;i -=5){
            console.log(i)
          }


          
        //Đệ quy
        var array =['a', 'b','c','a', 'b','c']
        console.log(...[(new Set(array))])//Set là độc nhất nên nó lọc ra

        function countDown(num){
            if(num>0){
                console.log(num);
                return countDown(num-1);
            }
            return num;
        }
        countDown(3)//đầu tiên là 3 > 0 thì cl ra số 3 và return count 3-1

        var array = ['Java','PHP','Ruby']
        function loop(start,end,cb){
            if(start<=end){
                cb(start)
                return loop(start+1,end,cb)
            }
        }
        loop(0,array.length-1,function(index){
            console.log('index',index)
            console.log(array[index])
        })
        function giaiThua(num){
            var output = 1
            for(var i = num; i >0 ; i--){
                output = output * i
            }
            return output
        }
        console.log(giaiThua(6))
        //dùng đệ quy
        function giaiThua(num){
            if(num > 0){
                return num * giaiThua(num - 1)
            }
            return 1
        }


        //DÙNG NHIỀU
        //Mảng methods:
        /*
            truyền hàm
            forEach() - duyệt phần tử
            every()
            some()
            find()
            filter()
            map()
            reduce()
        */
       var array = [
        {id:1,
            name: 'Java',
            coin:0
        },
        {
            id: 2,
            name: 'HTML',
            coin: 0
        },
        {
            id:3,
            name:'PHP',
            coin: 400
        }
       ]
       array.forEach(function(array,index){
        console.log(index,array)
       })
       var isFree = array.every(function(array,index){
        return array.coin ===0
       })
       //every là tất cả còn some 1 tk đúng thì trả true
       //find trả về 1 cái tìm được đầu tiên
       var isFind = array.find(function(array,index){
        return array.name === 'Ruby'
       })
       //filter trả về tất cả phần tử 
       var isFind = array.filter(function(array,index){
        return array.name === 'Ruby'
       })


       //Tìm môn thể thao bảng filter 
       const sports = [
        {
            name: 'Bóng rổ',
            like: 6
        },
        {
            name: 'Bơi lội',
            like: 5
        },
        {
            name: 'Bóng đá',
            like: 10
        },
        ]
       function getMostFavoriteSport(sports){
            var sport= sports.filter(function(array){
                return array.like > 6
        })
            return sport
        }
        console.log(getMostFavoriteSport(sports)) 



        //map()
        var course = [
        {
            name: 'Bóng rổ',
            like: 6
        },
        {
            name: 'Bơi lội',
            like: 5
        },
        {
            name: 'Bóng đá',
            like: 10
        },
        ]
        function courseHandler(course,index){
            return{
                id:course.id,
                name:`Khoa hoc: ${course.name}`,
                coin:course.coin,
                coinText: `Gia: ${course.coin}`,
                index:index
            }
            //return `<h2> ${course.name} </h2>`
        }
        var newCourses = course.map(courseHandler)//map giống như coppy lại số lượng ob trong mảng 
        //nhưng có thể sửa lại mới
        //trả về tất cả những gì mà function coursehandler muốn
        console.log(newCourses)
        //Map dùng rất nhiều 



        //reduce nhận về 1 giá trị duy nhất ví dụ như tính tổng
        //ví dụ không phải reduce
        var totalCoin = 0;
        for(var course of courses){
            totalCoin += course.coin
        }
        console.log(totalCoin)


        //reduce nâng cao
       //var i =0 
        //dùng reduce để tính toán nhanh hơn nhiều dùng for
        function coinHandler(accumulator,currentValue,currentIndex,originArray){
            //i++

            // var total = accumulator + currentValue.coin 
            // console.table({
            //     'Lượt chạy:':i,
            //     'Biến tích trữ:': accumulator,
            //     'Giá khóa học:': currentValue.coin,
            //     'Tích trữ được:': total
            // })

            //accumulator là gán giá trị = 0 ở reduce gọi là giá trị khởi tạo cho tổng
            return accumulator + currentValue.coin
            //accumulator ban đầu gán bằng 0 ở reduce và khi chạy reduce nó sẽ lặp lại số 
            //lần courses có giá trị 
            // 0 + currentValue là giá trị hiện tại của mảng đang xét và 
            //nó cộng tăng dần khi chạy hết reduce
        }
        //dùng reduce
        var totalCoin = courses.reduce(coinHandler,0)
        console.log(totalCoin)
        var toltalCoin = courses.reduce(function(total,course){
            return total + course.coin
        },0)


        //Ví dụ về reduce

        var sportss = [
            {
                name: 'Bơi lội',
                gold: 11
            },
            {
                name: 'Boxing',
                gold: 3
            },
            {
                name: 'Đạp xe',
                gold: 4
            },
            {
                name: 'Đấu kiếm',
                gold: 5
            },
        ]       

        function getTotalGold(sports){
            function goldHandler (a,b){
                return a+b.gold
            }
            var totalGold = sports.reduce(goldHandler,0)
            return totalGold
        }   

    // Expected results:
    console.log(getTotalGold(sportss)) // Output: 23
    
    var num = [
        100,200,220,200,480
    ]
    var totalCoin = num.reduce(function(total,num){
        return total+num
    })

    var depthArray = [1,2,[3,4],5,6,[7,8,9]]
    var flatArray = depthArray.reduce(function(flatOutput,depthItem){
        return flatOutput.concat(depthItem)//nối mảng 
    },[])//ban đầu flatOutput = []

    var topics = [
        {
            topic:'Front-end',
            courses: [
                {
                    id:1,
                    title: "HTML,CSS"
                },
                {
                    id:2,
                    title:"JavaScript"
                }
            ]
        },
        {
            topic:'Back-end',
            courses:[
                {
                    id:1,
                    title:"PHP"
                },
                {
                    id:2,
                    title:"NodeJS"
                }
            ]
        }
    ]
    var newCourses = topics.reduce(function(courses,topic){
        return courses.concat(topic.courses)//nối 4 khóa học
    },[])
    console.log(newCourses)
    //reduce để gộp mảng xong dùng map để hiện giao diện ng dùng
    var htmls = newCourses.map(function(course){
        return  `
            <div>
                <h2>${course.title}</h2>
                <p>ID: ${course.id}</p>
            </div>
        `
    })
    console.log(htmls.join(''))

    //reduce cho ra 1 giá trị duy nhất của mảng đó
            const donations = [20, 100, 80];
        let total = donations.reduce((total,donation) => {
           return total + donation;
        }, 50);
        console.log(total);//250

    //filter có điều kiện
            const numbers = [1,2,3,4,5,6,7,8];
        let odds = numbers.filter(num => num % 2);
        console.log(odds);//[1,3,5,7]       

    //map để thay đổi giá trị đầu ra của mảng
            const lengthArr = [1, 4, 3, 6];
        let areaArr = lengthArr.map(length => length * length);
        console.log(areaArr);//[1, 16, 9, 36]


        //Ví dụ
        var watchList = [
            {
              "Title": "Inception",
              "Year": "2010",
              "Rated": "PG-13",
              "Released": "16 Jul 2010",
              "Runtime": "148 min",
              "Genre": "Action, Adventure, Crime",
              "Director": "Christopher Nolan",
              "Writer": "Christopher Nolan",
              "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
              "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
              "Language": "English, Japanese, French",
              "Country": "USA, UK",
              "imdbRating": "8.8",
              "imdbVotes": "1,446,708",
              "imdbID": "tt1375666",
              "Type": "movie",
            },
            {
              "Title": "Interstellar",
              "Year": "2014",
              "Rated": "PG-13",
              "Released": "07 Nov 2014",
              "Runtime": "169 min",
              "Genre": "Adventure, Drama, Sci-Fi",
              "Director": "Christopher Nolan",
              "Writer": "Jonathan Nolan, Christopher Nolan",
              "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
              "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
              "Language": "English",
              "Country": "USA, UK",
              "imdbRating": "8.6",
              "imdbVotes": "910,366",
              "imdbID": "tt0816692",
              "Type": "movie",
            },
            {
              "Title": "The Dark Knight",
              "Year": "2008",
              "Rated": "PG-13",
              "Released": "18 Jul 2008",
              "Runtime": "152 min",
              "Genre": "Action, Adventure, Crime",
              "Director": "Christopher Nolan",
              "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
              "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
              "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
              "Language": "English, Mandarin",
              "Country": "USA, UK",
              "imdbRating": "9.0",
              "imdbVotes": "1,652,832",
              "imdbID": "tt0468569",
              "Type": "movie",
            },
            {
              "Title": "Batman Begins",
              "Year": "2005",
              "Rated": "PG-13",
              "Released": "15 Jun 2005",
              "Runtime": "140 min",
              "Genre": "Action, Adventure",
              "Director": "Christopher Nolan",
              "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
              "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
              "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
              "Language": "English, Urdu, Mandarin",
              "Country": "USA, UK",
              "imdbRating": "8.3",
              "imdbVotes": "972,584",
              "imdbID": "tt0372784",
              "Type": "movie",
            },
            {
              "Title": "Avatar",
              "Year": "2009",
              "Rated": "PG-13",
              "Released": "18 Dec 2009",
              "Runtime": "162 min",
              "Genre": "Action, Adventure, Fantasy",
              "Director": "James Cameron",
              "Writer": "James Cameron",
              "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
              "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
              "Language": "English, Spanish",
              "Country": "USA, UK",
              "imdbRating": "7.9",
              "imdbVotes": "876,575",
              "imdbID": "tt0499549",
              "Type": "movie",
            }
          ];
          function calculateRating(watchList){
            var imdbNolan = watchList.filter(function(list){
              return list.Director==="Christopher Nolan"
            })
            var imdbTotal = imdbNolan.reduce(function(a,b){
              return a+Number(b.imdbRating)
            },0)
            var imdbAv = imdbTotal/imdbNolan.length
            return imdbAv
          }
          
          
          // Expected results
          console.log(calculateRating(watchList)); // Output: 8.675
          
          //hiểu rõ reduce
          const number = [1,2,3,4,5]
          const result = number.reduce((a,b)=>{
            return a + b
          })

          //tự code reduce
          Array.prototype.reduce2 = function(callBack,result){
            let i = 0
            if(arguments.length < 2){
                i=1
                result = this[0]
            }
            for(; i<this.length; i++){
                result = callBack(result,this[i],i,this)
            }
            return result
          }

          
          
         function arrToObj(arr){
            return arr.reduce(function(a,b){
               a[b[0]]=b[1]
               return a
            },{})
        }
        // Expected results:
        var arr = [
           ['name', 'Sơn Đặng'],
           ['age', 18],
        ];
        console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
        
        //includes method (Array,String)
        var title = 'Responsive web design'
        console.log(title.includes('web'))  

        var courses = [
            'Javascript',
            'PHP',
            'Dart'
        ]
        console.log(courses.includes('PHP'))

        //Callback
        var courses = [
            'Javascript',
            'PHP',
            'Dart'
        ]
        Array.prototype.map2 = function(callBack){
            var output = []
            for(var i = 0; i < this.length; ++i){
                var result = callBack(this[i],i)
                output.push(result)
            }
            return output
        }//tạo thêm 1 function map2 cho array
        var htmls = courses.map2(function(course){
            return course * 2;
        })
        console.log(htmls.join(''))

        //
        for(var index in courses){
            console.log(courses[index])
        }

        // My forEach()
        var corses = [
            'Javascript',
            'PHP',
            'Ruby'
        ]
        //như 1 vòng lặp
        courses.forEach(function(course,index,array){
            console.log(course,index,array)
        })
        //course trả về giá trị của mảng , index trả về số trong mảng,array trả về array gốc
         
        //forEach
        Array.prototype.forEach2 = function(callBack){
            var output = [];
            for(var index in this){
                if(this.hasOwnProperty(index)){
                    var result=callBack(this[index],index,this)
                    if(result){
                        output.push(this[index])
                    }
                }
            }
            return output
        }

        //filter2
        var filterCourses = courses.filter(function(course){
            return corses.coin>700
        })
        console.log(filterCourses)

        Array.prototype.filter2 = function(callBack){
            for(var index in this){
                if(this.hasOwnProperty(index)){
                    callBack(this[index],i,this)
                }
            }
        }
          
    
        //Some() tối thiểu 1 phần tử thỏa mãn thì in ra true
        //nếu có result = true thì in ra là đúng
        var isResult = courses.some(function(course){
            return course.isResult
        })

        Array.prototype.some2 = function(callBack){
            for(var index in this){
                if(this.hasOwnProperty(index)){
                    if(callBack(this[index],index,this)){
                        return true
                    }
                    
                }
            }
            return false
        }

        //every nếu tất cả đúng thì nó mới in ra true
        Array.prototype.every2 = function(callBack){
            var output= true
            for(var index in this){
                if(this.hasOwnProperty(index)){
                    var result = callBack(this[index],index,this)
                    if(!result){
                        output= false
                        break
                    }
                }
            }
            return output
        }

          
          
          