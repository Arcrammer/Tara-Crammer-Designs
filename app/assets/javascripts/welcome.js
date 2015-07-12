/*  Welcome.js
    Sunday, 12 July, 2015
    Tara Crammer Designs
    Alexander Rhett Crammer  */

$(document).ready(function () {
  var navigationStack = $("nav");
  var pancakes = $("#pancakes");
  navigationStack.css("display","none");
  $("#pancakes").click(function () {
    if (navigationStack.css("display") == "none") {
      navigationStack.css("display","block");
      pancakes.css("position","fixed");
    } else {
      navigationStack.css("display","none");
      pancakes.css("position","absolute");
    }
  });
});