const displayElem = document.getElementById("display-time");

// display time
function displayTime() {
  const time = new Date();
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = time.getHours() <= 12 ? "AM" : "PM";
  displayElem.innerText = `${String(hours).padStart(2, "0")} : ${String(
    minutes
  ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} ${ampm}`;
}
setInterval(displayTime, 1000);
displayTime();
