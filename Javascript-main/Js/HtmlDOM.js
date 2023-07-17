//************************************************************************************************************** */




          //Quan trọng

        //HTML DOM **** quan trọng
        //Document Object Model(tạo ra 1 mô hình thì đó là DOM) tuân theo W3C
          
        /**
         * Có 3 thành phần 
         * 1. Element(ví dụ h1,h2,p,html)
         * 2.Attribute(thuộc tính bên trong các thẻ )
         * 3.Text(đoạn chữ trong các elemnt)
         */
        //Node
        //Js chỉ là công cụ cung cấp cho mình cách cung cấp vào HTML DOM
        //Js: Browse | Server(NodeJs)
        //Browser: HTML -> DOM ->WEB API

        // HTML DOM
        // Document là đại diện cho cả trang web của mình 
        //mỗi khi muốn truy xuất từng thành phần thì phải đi qua document
        document.write('Hello world!');

        //1.Element:cách lấy ra element
        /*
            ID,class,tag,CSS selector.HTML collection
        */
       //muốn lấy id của element thì phải đi qua document
       var headingNode = document.getElementById('heading')
       console.log({
        element: headingNode
       })

       //class: trả về nhiều class 
       var headingNodes = document.getElementsByClassName('heading')

       //tag: select đến các thẻ ví dụ h1,h2,p (HTML Collection)
       var headingNodes = document.getElementsByTagName('h1')

       //CSS selector (giống CSS nó lấy class là . và lấy id là #) dùng y hệt css khi muốn truy cập thẻ
       var headingNode = document.querySelector('.heading')
       var headingNode = document.querySelector('.box .heading-2:nth-chld(2)')//nếu . heading có nhiều tk dùng first-child or nth-child

       //ALL(NodeList)
       var headingNode = document.querySelectorAll('.box .heading-2')//trả về nhiều node
       console.log(headingNode[0])

       //HTML collections
       console.log(document.forms['form-1'])
       console.log(document.forms[0])
       console.log(document.anchors)//thẻ a
       var productsListElement = document.querySelector('.products-list')
        var firstProductElement = document.querySelectorAll('.product')[0]
        var firstProductElement = document.querySelector('.product:first-child')
        var buttonElements = document.getElementsByTagName('button')

        var listItemNodes =
         document.querySelectorAll('.box-1 li')

         //Node Attribute and Node Text
         //DOM Attribute
         var headingElement = 
            document.querySelector('h1')
        headingElement.title = 'Heading'
        headingElement.setAttribute('title', 'Heading')
        console.log(headingElement.getAttribute('class'))

        //DOM Text
        //InnerText, TextContent
        var headingElement = 
            document.querySelector('.heading')
        headingElement.innerText = 'New heading'
        headingElement.textContent='New content'

        //InnerHTML(bên trong) and OuterHTML(bên ngoài kể cả thẻ đó nó sẽ thay thế ra)
        var boxElement = document.querySelector('.box')
        boxElement.innerHTML='<h1>Heading</h1>'
        console.log(boxElement.innerHTML)

        //Ví dụ từ mảng ta có thể ghép vào lệnh html để in ra li
        var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']       

        function render(courses) {
            var uk = document.querySelector('.courses-list')
            var li = courses.map(function(course){
                return `
                    <li>${course}</li>
                `
            })
            //li đang là 1 mảng khác do map biến lại
            var html = li.join('')//biến mảng lo thành 1 chuỗi
            console.log(html)
            uk.innerHTML=html//muốn innerHTML phải là chuỗi
        }       

        render(courses)

        //Node properties
        console.log([boxElement])//để xem có những phương thức nào 

        //clientHeight: Chiều cao của element.
        //clientWidth: Chiều rộng của element.



        //DOM CSS
        var boxElements = 
            document.querySelector('.box')
        boxElements.style.width = '100px'
        boxElements.style.height = '200px'
        boxElements.style.backgroundColor = '200px'

        //style nhiều thuộc tính
        Object.assign(boxElements.style,{
            width:'200px',
            height:'100px',
            backgroundColor: 'green'
        })

        //ClassList property

        //add thêm class 
        //contains kiểm tra class này có hay k
        //remove xóa class
        //toggle nếu có class thì xóa nếu k có thì thêm class
        var boxElement1 = 
            document.querySelector('.box')
        console.log(boxElement1.classList)
        boxElement1.classList.add('red')
        boxElement1.classList.contains('red')
        setTimeout(()=>{
            boxElement1.classList.remove('red')
        },3000)
        boxElement1.classList.toggle('red')//dùng để đóng mở class 

        //Khi có 1 mảng các phần tử div giống nhau mà muốn thêm hết
        //phải duyệt qua mảng phần tử đó
        var d = document.querySelectorAll('div')
        d.forEach((item)=>{item.classList.add('box')})





        // Quan trọng
        //DOM events 
        var h1Element = 
            document.querySelectorAll('h1')
        for(var i=0;i<h1Element.length;++i){
            h1Element[i].onclick = function(e){
                console.log(e.target)
            }
        }

        var bt = document.querySelector('button')
        bt.onclick = function(){
             bt.style.color = '#fff'
        }

        //Input/select
        //Key up/down
        var inputValue
        //input
        var inputElement = document.querySelector('input[type="text]')
        inputElement.onchange = function(e){//bỏ focus để ấn ra ngoài
            console.log(e.target.value)
        }
        inputElement.oninput = function(e){//khi đến đâu ăn đến đấy
            console.log(e.target.value)
        }
        //checkbox
        var inputElement = document.querySelector('input[type="checkbox]')
        inputElement.onchange = function(e){//bỏ focus để ấn ra ngoài
            console.log(e.target.checked)//nếu nó được checked thì true
        }
        //select
        var inputElement = document.querySelector('select')
        inputElement.onchange = function(e){//bỏ focus để ấn ra ngoài
            console.log(e.target.value)
        }

        //Key up/down khi nhấc phím lên thì keyup còn khi ấn xuống thì lấy value
        //dùng phím
        var inputElement = document.querySelector('input[type="text]')
        inputElement.onkeydown = function(e){//bỏ focus để ấn ra ngoài
            console.log(e.which)//phím mình vừa nhập
            switch (e.which){
                case 27:
                        console.log('Exit')
                        break
            }
        }


        




