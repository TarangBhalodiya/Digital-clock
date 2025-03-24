// hamburger menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList?.contains("max-md:hidden")
    ? mobileMenu?.classList?.remove("max-md:hidden")
    : mobileMenu?.classList?.add("max-md:hidden");
});
