// TODO: Display the current day at the top of the calender when a user opens the planner.
// use dayjs() to implement this feature

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd, MMMM D, YYYY'));

// TODO: Present timeblocks for standard business hours when the user scrolls down.
// time schedule should be from 9am to 5pm ✅

var currentTime = parseInt(dayjs().format('H'));
console.log(currentTime);

var nineAM = $('input[id="9am"]');
console.log(nineAM);
var tenAM = $('input[id="10am"]');
var elevenAM = $('input[id="11am"]');
var twelvePM = $('input[id="12pm"]');
var onePM = $('input[id="1pm"]');
var twoPM = $('input[id="2pm"]');
var threePM = $('input[id="3pm"]');
var fourPM = $('input[id="4pm"]');
var fivePM = $('input[id="5pm"]');

// TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// if the current time is after a timeblock, that timeblock should be grey ✅
// if the current time matches a timeblock, it should be red ✅
// if the current time is before the remaining timeblocks, it should be green and be able to add text ✅

var label9AM = parseInt(nineAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2));

console.log(typeof label9AM);
console.log(label9AM < currentTime);
console.log(typeof currentTime);

var label10AM = parseInt(tenAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 10
var label11AM = parseInt(elevenAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 11
var label12PM = parseInt(twelvePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 12
var label1PM = parseInt(onePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 13
var label2PM = parseInt(twoPM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 14
var label3PM = parseInt(threePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 15
var label4PM = parseInt(fourPM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 16
var label5PM = parseInt(fivePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12;  // 17

var labelTimes = [label9AM, label10AM, label11AM, label12PM, label1PM, label2PM, label3PM, label4PM, label5PM];
console.log(labelTimes);

if (label9AM < currentTime) {
    nineAM.addClass('past');
} else if (label9AM === currentTime) {
    nineAM.addClass('present');
} else {
    nineAM.addClass('future');
};

if (label10AM < currentTime) {
    tenAM.addClass('past');
} else if (label10AM === currentTime) {
    tenAM.addClass('present');
} else {
    tenAM.addClass('future');
};

if (label11AM < currentTime) {
    elevenAM.addClass('past');
} else if (label11AM === currentTime) {
    elevenAM.addClass('present');
} else {
    elevenAM.addClass('future');
};

if (label12PM < currentTime) {
    twelvePM.addClass('past');
} else if (label12PM === currentTime) {
    twelvePM.addClass('present');
} else {
    twelvePM.addClass('future');
};

if (label1PM < currentTime) {
    onePM.addClass('past');
} else if (label1PM === currentTime) {
    onePM.addClass('present');
} else {
    onePM.addClass('future');
};

if (label2PM < currentTime) {
    twoPM.addClass('past');
} else if (label2PM === currentTime) {
    twoPM.addClass('present');
} else {
    twoPM.addClass('future');
};

if (label3PM < currentTime) {
    threePM.addClass('past');
} else if (label3PM === currentTime) {
    threePM.addClass('present');
} else {
    threePM.addClass('future');
};

if (label4PM < currentTime) {
    fourPM.addClass('past');
} else if (label4PM === currentTime) {
    fourPM.addClass('present');
} else {
    fourPM.addClass('future');
};

if (label5PM < currentTime) {
    fivePM.addClass('past');
} else if (label5PM === currentTime) {
    fivePM.addClass('present');
} else {
    fivePM.addClass('future');
};

// TODO: Allow a user to enter an event when they click a timeblock
// while the timeblock is green, the user can add text ✅
console.log(Object.values(nineAM)[0].matches('.form-control')); // true

var inputTimes = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];
console.log(inputTimes[0][0].id);

var btn9 = $('button[id="9am"]');
var btn10 = $('button[id="10am"]');
var btn11 = $('button[id="11am"]');
var btn12 = $('button[id="12pm"]');
var btn1 = $('button[id="1pm"]');
var btn2 = $('button[id="2pm"]');
var btn3 = $('button[id="3pm"]');
var btn4 = $('button[id="4pm"]');
var btn5 = $('button[id="5pm"]');

var arrayOfBtns = [btn9, btn10, btn11, btn12, btn1, btn2, btn3, btn4, btn5];
console.log(arrayOfBtns[0][0].id);

// disable save button if past current time
for (var a = 0; a < inputTimes.length; a++) {
    for (var b = 0; b < arrayOfBtns.length; b++) {
        if (inputTimes[a][0].id === arrayOfBtns[b][0].id && !inputTimes[a][0].className.includes("future")) {
            console.log(inputTimes[a][0].id);
            console.log(arrayOfBtns[b][0].id);
            console.log(inputTimes[a][0].className.includes("future"));
            console.log(arrayOfBtns[b][0]);
            var disabled = arrayOfBtns[b][0];
        }
        disabled.setAttribute("disabled", 'disabled');
    };
};

// TODO: Persist events between refreshes of a page and add to local storage
// use event.preventDefault() to stop forms from refreshing and deleting data ✅
function addToCalendar() {
    for (var i = 0; i < inputTimes.length; i++) {
        if(Object.values(inputTimes[i])[0].matches('.future')) {
            console.log(Object.values(inputTimes[i])[0].matches('.future'));
            btn9.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label9AM + "AM", nineAM.val());
            });
            
            btn10.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label10AM + "AM", tenAM.val());
            });
            
            btn11.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label11AM + "AM", elevenAM.val());
            });
            
            btn12.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label12PM + "PM", twelvePM.val());
            });
            
            btn1.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label1PM + "PM", onePM.val());
            });
            
            btn2.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label2PM + "PM", twoPM.val());
            });
            
            btn3.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label3PM + "PM", threePM.val());
            });
            
            btn4.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label4PM + "PM", fourPM.val());
            });
            
            btn5.on('click', function(event) {
                event.preventDefault();
                localStorage.setItem("Time: " + label5PM + "PM", fivePM.val());
            });
        } else {
            inputTimes[i].attr('disabled', 'disabled');
        };
    };
};

addToCalendar();

// TODO: Retrieves the data from local storage
// previous input fields with data should continue to show on the page ✅
function retrieveLocalData() {
    var nineAMData = localStorage.getItem("Time: " + label9AM + "AM");
    nineAM.val(nineAMData);

    var tenAMData = localStorage.getItem("Time: " + label10AM + "AM");
    tenAM.val(tenAMData);

    var elevenAMData = localStorage.getItem("Time: " + label11AM + "AM");
    elevenAM.val(elevenAMData);

    var twelvePMData = localStorage.getItem("Time: " + label12PM + "PM");
    twelvePM.val(twelvePMData);

    var onePMData = localStorage.getItem("Time: " + label1PM + "PM");
    onePM.val(onePMData);

    var twoPMData = localStorage.getItem("Time: " + label2PM + "PM");
    twoPM.val(twoPMData);

    var threePMData = localStorage.getItem("Time: " + label3PM + "PM");
    threePM.val(threePMData);

    var fourPMData = localStorage.getItem("Time: " + label4PM + "PM");
    fourPM.val(fourPMData);

    var fivePMData = localStorage.getItem("Time: " + label5PM + "PM");
    fivePM.val(fivePMData);
};

retrieveLocalData();