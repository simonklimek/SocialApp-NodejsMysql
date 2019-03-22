function search() {
    var search = document.getElementById('search').value;
    
    $.ajax({
      url: '/search',
      type: 'GET',
      data: jQuery.param({ search: search}) ,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      success: function (response) {
        $('#pins').html(response);
      },
      error: function () {
          console.log("error");
      }
  })};





function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
           $('#new-cover').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
};