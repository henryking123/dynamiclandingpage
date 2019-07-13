function init() {
  // Ticking time
  const $time = document.querySelector("#time");
  setInterval(() => {
    const date = new Date(),
      hour = date.getHours(),
      displayHour = hour % 12 || "12",
      min = date.getMinutes(),
      amPm = hour >= 12 ? "PM" : "AM",
      sec = date.getSeconds();

    $time.innerHTML = `<span>${addZero(displayHour)}</span>:<span>${addZero(min)}</span>:<span>${addZero(sec)}</span><span>${amPm}</span>`;

    setBg(hour);
  }, 1000);
}

function setBg(hour) {
  const $greeting = document.querySelector("#greeting");
  if (hour < 12) {
    // Morning
    document.body.style.background = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    $greeting.textContent = "Good Morning,";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.background = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    $greeting.textContent = "Good Afternoon,";
  } else {
    // Evening
    document.body.style.background = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = "white";
    $greeting.textContent = "Good Evening,";
  }
}

// Setting name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      $name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
const $name = document.querySelector("#name");
$name.innerHTML = localStorage.getItem("name") ? localStorage.getItem("name") : "[Enter Name]"
$name.addEventListener("blur", setName);
$name.addEventListener("keypress", setName);


// Setting focus
function setFocus(e) {
  if (e.type === "keypress" && (e.which == 13 || e.keyCode == 13)) {
    localStorage.setItem("focus", e.target.innerText);
    $focus.blur();
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
const $focus = document.querySelector("#focus");
$focus.innerHTML = localStorage.getItem("focus") ? localStorage.getItem("focus") : "[Enter focus]"
$focus.addEventListener("blur", setFocus);
$focus.addEventListener("keypress", setFocus);

// Adding Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

init();