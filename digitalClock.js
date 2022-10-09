function digitalClock() {
  let date = new Date(); // Creating object of the Date class
  let hour = date.getHours(); // Get current hour
  let minute = date.getMinutes(); // Get current minute
  let second = date.getSeconds(); // Get current second
  let amPm = hour >= 12 ? "PM" : "AM"; // Assigning AM / PM according to the current hour
  // Converting the hour in 12-hour format
  hour = hour >= 12 ? hour - 12 : hour;
  // Formatting hour, minute, and second if they are less than 10
  const format = (hms) => (hms < 10 ? "0" + hms : hms);
  hour = format(hour);
  minute = format(minute);
  second = format(second);
  // Adding time elements to the div
  document.getElementById(
    "digital-clock"
  ).innerText = `${hour} : ${minute} : ${second} ${amPm}`;
}

//setInterval(Time, 1000);
setInterval(() => {
  digitalClock();
}, 1000);
