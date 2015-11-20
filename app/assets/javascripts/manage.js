/*  manage.js
    Tuesday, 21 July, 2015
    Tara Crammer Designs
    Alexander Rhett Crammer  */

$(document).ready(function () {
  switch (window.location.pathname) {
    case "/Manage/Create": {
      /* Properties */
      var newPostForm = document.forms[0];
      newPostForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from immediate submission
        var emptyFields = []; // Create and reset at each submission
        // The form was submitted; Check for missing post data
        $(".post-field").each(function (index, field) {
          if ($.trim($(field).val()) == "") {
            emptyFields.push(field.id);
          }
        });
        if (tinyMCE.activeEditor.getContent() == "") {
          emptyFields.push("post-body");
        }
        if (emptyFields.length <= 0) {
          // There were no empty fields; Create the post
          this.submit();
        } else {
          // The user is missing post data; Notify them
          $(emptyFields).each(function (index, emptyField) {
            $(document.getElementById(emptyField)).addClass("red-border");
          });
        }
      });
    }
  }
});
