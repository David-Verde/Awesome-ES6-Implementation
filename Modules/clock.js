function updateTime() {
  const dateInfo = new Date();

  /* time */
  let hr;
  const min = (dateInfo.getMinutes() < 10) ? `0${dateInfo.getMinutes()}` : dateInfo.getMinutes();
  const sec = (dateInfo.getSeconds() < 10) ? `0${dateInfo.getSeconds()}` : dateInfo.getSeconds();
  const ampm = (dateInfo.getHours() >= 12) ? 'PM' : 'AM';

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() === 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  const currentTime = `${hr}:${min}:${sec}`;

  // print time
  document.getElementsByClassName('hms')[0].innerHTML = currentTime;
  document.getElementsByClassName('ampm')[0].innerHTML = ampm;

  /* date */
  const dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = dateInfo.getDate();

  // store date
  const currentDate = `${dow[dateInfo.getDay()]}, ${month[dateInfo.getMonth()]} ${day}`;

  document.getElementsByClassName('date')[0].innerHTML = currentDate;
}

// print time and date once, then update them every second
updateTime();
setInterval(() => {
  updateTime();
}, 1000);

export {updateTime,};

