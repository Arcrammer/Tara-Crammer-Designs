/*  navigation_bar.js
    Sunday, 26 July, 2015
    Tara Crammer Designs
    Alexander Rhett Crammer  */

$(document).ready(function () {
  /* Pancake Button */
  var navigationStack = $("nav");
  var pancakes = $(".pancake-button");
  navigationStack.css("display","none");
  pancakes.click(function () {
    if (navigationStack.css("display") == "none") {
      navigationStack.css("display","block");
      pancakes.css("position","fixed");
    } else {
      navigationStack.css("display","none");
      pancakes.css("position","absolute");
    }
  });
  pancakes.on("click", function () {
    if (this.classList.contains("active") === true) {
      this.classList.remove("active")
    } else {
      this.classList.add("active")
    }
  });
  /* Navigation List */
  $("nav").click(function () {
    // The navigation menu is visible and it was clicked
    navigationStack.css("display","none");
    pancakes.css("position","absolute");
  });
});
