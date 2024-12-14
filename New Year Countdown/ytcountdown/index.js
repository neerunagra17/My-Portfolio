const countdown = () => {
    // Set the target date to New Year 2025
    const countDate = new Date("Jan 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
  
    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    // Update HTML content
    document.querySelector(".day").innerText = textDay >= 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour >= 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute >= 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond >= 0 ? textSecond : 0;
  };
  
  // Run countdown every 500ms
  setInterval(countdown, 500);
  