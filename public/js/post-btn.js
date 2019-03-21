// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems);
//   });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M
//       .Modal
//       .init(elems);
// });

// Or with jQuery

// $(document).ready(function () {
//   $('.modal').modal();
// });



document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// Or with jQuery

$(document).ready(function () {
  $('.modal').modal();
});


$(document).ready(function(){
  $('.parallax').parallax();
});
