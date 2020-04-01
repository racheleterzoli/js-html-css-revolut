$(document).ready(function(){
  $(".linea").hide();
  $(".account p").click(
    function(){
      $(".linea").toggle();
    }
  );
});
