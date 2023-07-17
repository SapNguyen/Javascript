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

       

