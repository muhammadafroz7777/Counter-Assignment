// Date.getTime()
// Jan 1 1970 se abhe tk jitne milleseconds guzar gae wo lekar aajata he..

// ------------aje ab tak kitne(second munit hour days mounth year ) guzar chuke hain check krne ka tarika---------

// var now = new Date();
// var bd = new Date("12/3/1999");  //mm/dd/yyyy
// var milleseconds = now.getTime();
// var bdMillseconds = bd.getTime();
// var diff = milleseconds - bdMillseconds;
// console.log("milleseconds=>", diff);
// console.log("seconds=>", Math.round(diff / 1000));
// console.log("minutes=>", Math.round(diff / 1000 / 60));
// console.log("hours=>", Math.round(diff / 1000 / 60 / 60));
// console.log("day=>", Math.round(diff / 1000 / 60 / 60 / 24));
// console.log("months=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30));
// console.log("years=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12));

// <------------------------------------>





// --------------office Attendance ka method banane ka tarika----------------

// var attendanceTime = new Date();
// attendanceTime.setHours(18);
// attendanceTime.setMinutes(45);
// attendanceTime.setSeconds(0);
// console.log(attendanceTime);
// var now = new Date();

// var diff = now.getTime() - attendanceTime.getTime();
// console.log(diff);
// var minutes = Math.floor(diff / 1000 / 60);
// console.log("minutes=>", minutes);
// if (minutes <= 0) {
//   console.log("You are on time.Keep it Up!");
// } else if (minutes <= 5) {
//   console.log("Bach gae aaj. Kal se fix 45 se pehle aajana");
// } else {
//   console.log("You are late.Salary kat gye.Yeah!");
// }

// <------------------------------->




// -------------------------Counter Assignment Start-----------------
// var hours = document.getElementById("hours")
// var minutes = document.getElementById("minutes")
// var seconds = document.getElementById("seconds")
// var Day = document.getElementById("day")
// var Month = document.getElementById("month")
// var Year = document.getElementById("year")
// var Medium = document.getElementById("medium")



// setInterval(function(){
   
//     var currentDate = new Date();
//     var currentHour = currentDate.getHours();
//     var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
//     var MonthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

//     hours.innerText = currentDate.getHours();
//     minutes.innerText = currentDate.getMinutes();
//     seconds.innerText = currentDate.getSeconds();
//     Day.innerText = dayNames[currentDate.getDay()];
//     Month.innerText = MonthNames[currentDate.getMonth()];
//     Year.innerText = currentDate.getFullYear();
//     if(hours.innerText < 13){
//         medium.innerText = "AM";

//     }
//     else{
//         medium.innerText = "PM";
//     }
// }, 1000);
// --------------------
// var now = new Date();
// var BakraEid = new Date("6/16/2024");  //mm/dd/yyyy
// var bkmilleseconds = now.getTime();
// var BakraEidMillseconds = BakraEid.getTime();
// var diff = BakraEidMillseconds - bkmilleseconds;
// console.log("milleseconds=>", diff);
// var bkminutes = Math.floor(diff / 1000 / 60);
// console.log("minutes=>", bkminutes);








var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var Day = document.getElementById("day")
var Month = document.getElementById("month")
var Year = document.getElementById("year")
var Medium = document.getElementById("medium")






setInterval(function(){

var now = new Date();
var BakraEid = new Date("6/16/2024");  //mm/dd/yyyy
var bkmilleseconds = now.getTime();
var BakraEidMillseconds = BakraEid.getTime();
var diff = BakraEidMillseconds - bkmilleseconds;
console.log("milleseconds=>", diff);
var bkseconds = Math.floor(diff / 1000 );
var bkminutes = Math.floor(diff / 1000/60 );
var bkhours = Math.floor(diff / 1000/60/60 );


seconds.innerText = bkseconds;
minutes.innerText = bkminutes;
hours.innerText = bkhours;



   
//     var currentDate = new Date();
//     var currentHour = currentDate.getHours();
//     var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
//     var MonthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

//     hours.innerText = currentDate.getHours();
//     minutes.innerText = currentDate.getMinutes();
//     seconds.innerText = currentDate.getSeconds();
//     Day.innerText = dayNames[currentDate.getDay()];
//     Month.innerText = MonthNames[currentDate.getMonth()];
//     Year.innerText = currentDate.getFullYear();
//     if(hours.innerText < 13){
//         medium.innerText = "AM";

//     }
//     else{
//         medium.innerText = "PM";
//     }
}, 1000);








// <--------------------->