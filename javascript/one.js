const URL = document.querySelector('[data-url="targt"]');

function a() {
  "use strict";
  if (window.innerWidth < 500) {
    URL.setAttribute(
      "src",
      'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fonetouchengineeringoffice&tabs=timeline&width=300px&height=600px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300px" height="600px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
    );
    URL.setAttribute("width", "300");
    URL.setAttribute("height", "600");
  } else {
    URL.setAttribute(
      "src",
      'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fonetouchengineeringoffice&tabs=timeline&width=500px&height=600px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500px" height="600px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
    );
    URL.setAttribute("width", "500");
    URL.setAttribute("height", "600");
  }
}
a();
function b() {
  var x = document.getElementById("navbar-example2");
  var y = x.classList.contains("sticky-top");
  if (window.innerWidth > 767) {
    if (!y) {
      x.classList.add("sticky-top");
    }
  } else {
    x.classList.remove("sticky-top");
  }
}
b();

window.addEventListener("resize", a);
window.addEventListener("resize", b);
