// var value = ""
var date = moment().format('dddd MMMM Do');
$('#currentDay').text(date);
var currentTime = moment().format("h:mma"); 
console.log(currentTime);


//Call functio t update date
setInterval(checkTime, 600000);
//Click Events for each timeblock
$(document).one('ready', function () {
    localStorage.clear();
});    


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

    function checkTime() {
        let date = moment().format('dddd MMMM Do');
        $('#currentDay').text(date);
    }

    var scheduleArray = [];
var time = moment();
var format = 'hh:mma';
var resetTime = moment('12:00am', format);
var nineBeginningTime = moment('9:00am', format);
var nineEndTime = moment('10:00am', format);
var tenBeginningTime = moment('10:00am', format);
var tenEndTime = moment('11:00am', format);
var elevenBeginningTime = moment('11:00am', format);
var elevenEndTime = moment('11:59am', format);
var twelveBeginningTime = moment('12:00pm', format);
var twelveEndTime = moment('12:59pm', format);
var oneBeginningTime = moment('1:00pm', format);
var oneEndTime = moment('1:59pm', format);
var twoBeginningTime = moment('2:00pm', format);
var twoEndTime = moment('2:59pm', format);
var threeBeginningTime = moment('3:00pm', format);
var threeEndTime = moment('3:59pm', format);
var fourBeginningTime = moment('4:00pm', format);
var fourEndTime = moment('4:59pm', format);
var fiveBeginningTime = moment('5:00pm', format);
var fiveEndTime = moment('5:59pm', format);


// This function controls changing the colors of the rows as each hour passes.  It is set to update every second.
setInterval(function () {
    checkTime();
}, 1000);


function checkTime() {
    
    if (time.isBefore(nineBeginningTime)) {
        // console.log('Tis before 1pm hour');
        $('#userInput9 ').css('background', '#77dd77');
    }
    if (time.isBetween(nineBeginningTime, nineEndTime)) {
        // console.log('Tis is the 9am hour');
        $('#userInput9').css('background', '#ff6961');
    }
    if (time.isAfter(nineEndTime)) {
        // console.log('Tis after the 9am hour');
        $('#userInput9').css('background', '#d3d3d3');
    }
    if (time.isBefore(tenBeginningTime)) {
        // console.log('Tis before 10am hour');
        $('#userInput10').css('background', '#77dd77');
    }
    if (time.isBetween(tenBeginningTime, tenEndTime)) {
        // console.log('Tis is the 10am hour');
        $('#userInput10').css('background', '#ff6961');
    }
    if (time.isAfter(tenEndTime)) {
        // console.log('Tis after the 10am hour');
        $('#userInput10').css('background', '#d3d3d3');
    }
    if (time.isBefore(elevenBeginningTime)) {
        // console.log('Tis before the 11am hour');
        $('#userInput11').css('background', '#77dd77');
    }
    if (time.isBetween(elevenBeginningTime, elevenEndTime)) {
        // console.log('Tis is the 11am hour');
        $('#userInput11').css('background', '#ff6961');
    }
    if (time.isAfter(elevenEndTime)) {
        // console.log('Tis before the 11am hour');
        $('#userInput11').css('background', '#d3d3d3');
    }
    if (time.isBefore(twelveBeginningTime)) {
        // console.log('Tis before 12pm hour');
        $('#userInput12').css('background', '#77dd77');
    }
    if (time.isBetween(twelveBeginningTime, twelveEndTime)) {
        // console.log('Tis is the 12pm hour');
        $('#userInput12').css('background', '#ff6961');
    }
    if (time.isAfter(twelveEndTime)) {
        // console.log('Tis after the 12pm hour');
        $('#userInput12').css('background', '#d3d3d3');
    }
    if (time.isBefore(oneBeginningTime)) {
        // console.log('Tis before 1pm hour');
        $('#userInput1').css('background', '#77dd77');
    }
    if (time.isBetween(oneBeginningTime, oneEndTime)) {
        // console.log('Tis is the 1pm hour');
        $('#userInput1').css('background', '#ff6961');
    }
    if (time.isAfter(oneEndTime)) {
        // console.log('Tis after the 1pm hour');
        $('#userInput1').css('background', '#d3d3d3');
    }
    if (time.isBefore(twoBeginningTime)) {
        // console.log('Tis before 2pm hour');
        $('#userInput2').css('background', '#77dd77');
    }
    if (time.isBetween(twoBeginningTime, twoEndTime)) {
        // console.log('Tis is the 2pm hour');
        $('#userInput2').css('background', '#ff6961');
    }
    if (time.isAfter(twoEndTime)) {
        // console.log('Tis after the 2pm hour');
        $('#userInput2').css('background', '#d3d3d3');
    }
    if (time.isBefore(threeBeginningTime)) {
        // console.log('Tis before 3pm hour');
        $('#userInput3').css('background', '#77dd77');
    }
    if (time.isBetween(threeBeginningTime, threeEndTime)) {
        // console.log('Tis is the 3pm hour');
        $('#userInput3').css('background', '#ff6961');
    }
    if (time.isAfter(threeEndTime)) {
        // console.log('Tis after the 3pm hour');
        $('#userInput3').css('background', '#d3d3d3');
    }
    if (time.isBefore(fourBeginningTime)) {
        // console.log('Tis before 4pm hour');
        $('#userInput4').css('background', '#77dd77');
    }
    if (time.isBetween(fourBeginningTime, fourEndTime)) {
        // console.log('Tis is the 4pm hour');
        $('#userInput4').css('background', '#ff6961');
    }
    if (time.isAfter(fourEndTime)) {
        // console.log('Tis after the 4pm hour');
        $('#userInput4').css('background', '#d3d3d3');
    }
    if (time.isBefore(fiveBeginningTime)) {
        // console.log('Tis before 5pm hour');
        $('#userInput5').css('background', '#77dd77');
    }
    if (time.isBetween(fiveBeginningTime, fiveEndTime)) {
        // console.log('Tis is the 5pm hour');
        $('#userInput5').css('background', '#ff6961');
    }
    if (time.isAfter(fiveEndTime)) {
        // console.log('Tis after the 5pm hour');
        $('#userInput5').css('background', '#d3d3d3');
    }
    // function colorMe(time) {
    //     var planNow = moment(now, "H A");
    //     var planEntry = moment(time, "H A");
    //     if (planNow.isBefore(planEntry) === true) {
    //         return "future";
    //     } else if (planNow.isAfter(planEntry) === true) {
    //         return "past";
    //     } else {
    //         return "present";
    //     }
//     var endTime = "9:00a"
// if (currentTime > endTime){
//     for (var i = 9; i < 18; i++) { 
//         console.log(currentTime, $(`#${i}`).data("time"));
//          if ($(`#${i}`).data("time") == currentTime){
//             $(`#text${i}`).addClass( "present");
//         } else if (currentTime < $(`#${i}`).data("time")) {
//             $(`#text${i}`).addClass( "future");
//         }
//     }



}