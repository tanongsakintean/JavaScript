const digitalClock = (second) => {
  let hour = second / (60 * 60);
  let minus = (second % (60 * 60)) / 60;
  let sec = (second % (60 * 60)) % 60;
  if (hour >= 12 && minus >= 1 && sec >= 1) {
    hour += 12;
  } else if (hour >= 24) {
    hour = 0;
  }
  console.log(` ${Math.floor(hour)}:${Math.floor(minus)}:${sec}`);
};

digitalClock(5025);
digitalClock(61201);
digitalClock(87000);
