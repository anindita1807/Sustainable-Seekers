document.addEventListener("DOMContentLoaded", function() {
    var toggleIcons = document.querySelectorAll('.fas.fa-eye');
  
    toggleIcons.forEach(function(icon) {
      icon.addEventListener('click', function(event) {
        event.preventDefault();
        var textElement = icon.nextElementSibling;
        if (textElement.style.display === 'none') {
          textElement.style.display = 'block'; // Show the text
        } else {
          textElement.style.display = 'none'; // Hide the text
        }
      });
    });
  });
