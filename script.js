const displayElem = document.getElementById("displayTime");

function displayTime() {
  const time = new Date();
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = time.getHours() <= 12 ? "AM" : "PM";

  displayElem.innerText = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}
setInterval(displayTime, 1000);
displayTime();

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  mobileMenu?.classList?.contains("max-md:hidden")
    ? mobileMenu?.classList?.remove("max-md:hidden")
    : mobileMenu?.classList?.add("max-md:hidden").toggle("max-md:block");
});
