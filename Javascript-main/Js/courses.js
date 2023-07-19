
var courseAPI = 'http://localhost:3000/courses'

function start(){
    getCourses(function(course){
        renderCourses(course)//course này được nhận khi JSON đã tạo ra mảng
    })//lấy ra khóa học
    CreateForm()
}
//chạy start để get dữ liệu ra
start()

//Function
function getCourses(callBack){
    fetch(courseAPI)
        .then(function(response){
            return response.json()//từ JSON -> JS types
        })
        .then(callBack)
}

//đẩy ra HTML
function renderCourses(courses){
    var listCoursesBlock = 
        document.querySelector('#list-courses')
    var htmls = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>
                    ${course.name}
                </h4>
                <p>
                    ${course.description}
                </p>
                    <button onclick="handledeleteCourse(${course.id})">Xóa</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')//chuyển sang chuỗi để vào html
}

function CreateForm(){
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        // var description = document.querySelector('input[description="description"]').value;
        var description = document.querySelector('#description').value;
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData,function(){
            getCourses(function(course){
                renderCourses(course)//course này được nhận khi JSON đã tạo ra mảng
            })
        })
        
    }
}
function createCourse(data,callBack){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(courseAPI,options)
        .then(function(response){
            response.json()
        })
        .then(callBack)
}
function handledeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(courseAPI +'/'+id,options)
        .then(function(response){
            response.json()
        })
        .then(function(){
            // getCourses(function(course){
            //     renderCourses(course)//course này được nhận khi JSON đã tạo ra mảng
            // })
            //gọi lại hàm get lại code
            var courseItem = document.querySelector('.course-item-'+id)
            if(courseItem){
                courseItem.remove()
            }
        })
}