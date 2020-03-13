var tableRow = $("<tr>");
tableRow.attr("class", "row");

var hourTD = $("<td>");
hourTD.attr("class", "hour");
var hours = [
	
	"9am",
	"10am",
	"11am",
	"12am",
	"1pm",
	"2pm",
	"3pm",
	"4pm",
	"5pm"
];
var value = " ";
var date = moment().format('LLL');
$('#currentDay').text(date);
var currentTime = moment().format('h'); 
console.log(currentTime);
setInterval(checkTime, 600000);
//Click Events for each timeblock
$(document).one('ready', function () {
    localStorage.clear();
})
function checkTime() {
    let date = moment().format('LL');
    $('#currentDay').text(date);
} 
function updateColors(){
    var currentTime = new Date().getHours();
    for (var i = 9; i < 18; i++) { 
    console.log(currentTime, $(`#${i}`).data("time"));
     if ($(`#${i}`).data("time") == currentTime){
        $(`#text${i}`).addClass( "present");
    } else if (currentTime < $(`#${i}`).data("time")) {
        $(`#text${i}`).addClass( "future");
    }
}
}

// console.log( Window.moment()


// var currentDate = moment().format("L")



    // Handler for .ready() called.


 //9AM
    $('#btn1').on('click', function () {
    var value1 = $("#userEntry1").val();
    localStorage.setItem("Entry1", value1);
    
});

//10AM
    $('#btn2').on('click', function () {
    var value2 = $("#userEntry2").val();
    localStorage.setItem("Entry2", value2);
    });
//11AM
    $('#btn3').on('click', function () {
    var value3 = $("#userEntry3").val();
    localStorage.setItem("Entry3", value3);
});
//12PM
    $('#btn4').on('click', function () {
    var value4 = $("#userEntry4").val();
    localStorage.setItem("Entry4", value4);
});
//1PM
    $('#btn5').on('click', function () {
    var value5 = $("#userEntry5").val();
    localStorage.setItem("Entry5", value5);
});
//2PM
    $('#btn6').on('click', function () {
    var value6 = $("#userEntry6").val();
    localStorage.setItem("Entry6", value6);
});
//3PMM
    $('#btn7').on('click', function () {
    var value7 = $("#userEntry7").val();
    localStorage.setItem("Entry7", value7);
});
//4PM
    $('#btn8').on('click', function () {
    var value8 = $("#userEntry8").val();
    localStorage.setItem("Entry8", value8);
});
//5PM
    $('#btn9').on('click', function () {
    var value9 = $("#userEntry9").val();
    localStorage.setItem("Entry9", value9);
});

