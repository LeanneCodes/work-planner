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

var currentTime;
var nineAM = $('input[id="9am"]');
var tenAM = $('input[id="10am"]');
var elevenAM = $('input[id="11am"]');
var twelvePM = $('input[id="12pm"]');
var onePM = $('input[id="1pm"]');
var twoPM = $('input[id="2pm"]');
var threePM = $('input[id="3pm"]');
var fourPM = $('input[id="4pm"]');
var fivePM = $('input[id="5pm"]');
console.log(nineAM.val("hello"));
console.log(tenAM.val("hello"));


// TODO: Allow a user to enter an event when they click a timeblock
// while the timeblock is green, the user can add text
// once the event passes, the text remains in the cell, but it changes to grey

// TODO: Save the event in local storage when the save button is clicked in that timeblock.
// utilise local storage to save calendar inputs

// TODO: Persist events between refreshes of a page
// use event.PreventDefault() to stop forms from refreshing and deleting data

