// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks

$(document).ready(function () {
  /* Pancake Button */
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
