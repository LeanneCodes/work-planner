// TODO: Display the current day at the top of the calender when a user opens the planner.
// use dayjs() to implement this feature

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd, MMMM D, YYYY'));

// TODO: Present timeblocks for standard business hours when the user scrolls down.
// time schedule should be from 9am to 5pm ✅

// TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// if the current time is after a timeblock, that timeblock should be grey
// if the current time matches a timeblock, it should be red
// if the current time is before the remaining timeblocks, it should be green and available to add text

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

// console.log(nineAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 9
// console.log(tenAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 10

var label9 = parseInt(nineAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2));

console.log(typeof label9);
console.log(label9 < currentTime);
console.log(typeof currentTime);

var label10 = parseInt(tenAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 10
var label11 = parseInt(elevenAM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 11
var label12 = parseInt(twelvePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)); // 12
var label1 = parseInt(onePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 13
var label2 = parseInt(twoPM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 14
var label3 = parseInt(threePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 15
var label4 = parseInt(fourPM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12; // 16
var label5 = parseInt(fivePM.parent("div").siblings("div").children("label").eq(0).text().slice(0,-2)) + 12;  // 17

var labelTimes = [label9, label10, label11, label12, label1, label2, label3, label4, label5];
console.log(labelTimes);

if (label9 < currentTime) {
    nineAM.addClass('diary-input');
} else if (label9 === currentTime) {
    nineAM.addClass('busy');
} else {
    nineAM.addClass('available');
};

if (label10 < currentTime) {
    tenAM.addClass('diary-input');
} else if (label10 === currentTime) {
    tenAM.addClass('busy');
} else {
    tenAM.addClass('available');
};

if (label11 < currentTime) {
    elevenAM.addClass('diary-input');
} else if (label11 === currentTime) {
    elevenAM.addClass('busy');
} else {
    elevenAM.addClass('available');
};

if (label12 < currentTime) {
    twelvePM.addClass('diary-input');
} else if (label12 === currentTime) {
    twelvePM.addClass('busy');
} else {
    twelvePM.addClass('available');
};

if (label1 < currentTime) {
    onePM.addClass('diary-input');
} else if (label1 === currentTime) {
    onePM.addClass('busy');
} else {
    onePM.addClass('available');
};

if (label2 < currentTime) {
    twoPM.addClass('diary-input');
} else if (label2 === currentTime) {
    twoPM.addClass('busy');
} else {
    twoPM.addClass('available');
};

if (label3 < currentTime) {
    threePM.addClass('diary-input');
} else if (label3 === currentTime) {
    threePM.addClass('busy');
} else {
    threePM.addClass('available');
};

if (label4 < currentTime) {
    fourPM.addClass('diary-input');
} else if (label4 === currentTime) {
    fourPM.addClass('busy');
} else {
    fourPM.addClass('available');
};

if (label5 < currentTime) {
    fivePM.addClass('diary-input');
} else if (label5 === currentTime) {
    fivePM.addClass('busy');
} else {
    fivePM.addClass('available');
};

// TODO: Allow a user to enter an event when they click a timeblock
// while the timeblock is green, the user can add text
console.log(Object.values(nineAM)[0].matches('.form-control')) // true

var inputTimes = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];
console.log(inputTimes);

var btn9AM = $('button[id="9am"]');
var btn10AM = $('button[id="10am"]');
var btn11AM = $('button[id="11am"]');
var btn12PM = $('button[id="12pm"]');
var btn1PM = $('button[id="1pm"]');
var btn2PM = $('button[id="2pm"]');
var btn3PM = $('button[id="3pm"]');
var btn4PM = $('button[id="4pm"]');
var btn5PM = $('button[id="5pm"]');

var arrayOfBtns = [btn9AM, btn10AM, btn11AM, btn12PM, btn1PM, btn2PM, btn3PM, btn4PM, btn5PM];
console.log(arrayOfBtns);

// for (var i = 0; i < inputTimes.length; i++) {
//     if(!Object.values(inputTimes[i])[0].matches('.available')) {
//         console.log(Object.values(inputTimes[i])[0].matches('.available'))
//         inputTimes[i].attr('disabled', 'disabled');
//     }
// };


btn9AM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label9 + "AM", nineAM.val());
});

btn10AM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label10 + "AM", tenAM.val());
});

btn11AM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label11 + "AM", elevenAM.val());
});

btn12PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label12 + "PM", twelvePM.val());
});

btn1PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label1 + "PM", onePM.val());
});

btn2PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label2 + "PM", twoPM.val());
});

btn3PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label3 + "PM", threePM.val());
});

btn4PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label4 + "PM", fourPM.val());
});

btn5PM.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("Time: " + label5 + "PM", fivePM.val());
});

function addToCalendar() {
    for (var i = 0; i < inputTimes.length; i++) {
        if(!Object.values(inputTimes[i])[0].matches('.available')) {
            // console.log(Object.values(inputTimes[i])[0].matches('.available'))
            inputTimes[i].attr('disabled', 'disabled');
            console.log(inputTimes[i][0].id.slice(0,-2));
        }
    };
}

// addToCalendar()
// TODO: Save the event in local storage when the save button is clicked in that timeblock.
// utilise local storage to save calendar inputs, while the input cell is green


// TODO: Persist events between refreshes of a page
// use event.preventDefault() to stop forms from refreshing and deleting data

