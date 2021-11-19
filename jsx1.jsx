let myButton = document.getElementById('name'); 
let myHeading = document.querySelector('h3');

function setUserName() {
    var myName = prompt('Пожалуйста введите свое имя:');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Приветствуем тебя, ' + myName + '!';
  }

  if(!localStorage.getItem('имя')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('имя');
    myHeading.textContent = 'Приветствуем тебя, ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }
var now = new Date().toLocaleTimeString();//получаем локальное время

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value; //нужно для того что бы добавлять 0 в секунды, минуты, часы, дату и месяц
        //например когда время 12:00:01, без '0' добавки нуля этого, получилось бы 12:0:1
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;//формат вывода даты и времени
}


setInterval(function () {//функция для обновления времени в "реальном времени"
    document.getElementById('date').innerHTML = date_time();
}, 1000);
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {//количество пикселей после которой появится кнопка
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("navbar").style.top = "-50px";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}



