$(document).ready(function(){
   $("#logo").animate({"opacity":1.0},1500,function(){console.log()});
   $("#quilt").animate({"opacity":1.0},2000,function(){console.log()});   
})

$("#clickFerPieces").click(function(){
   var colorChoice = $("input[name=color]:checked").val();
   var qty = $("#qty").val();
   for (var i = 0; i < qty; i++) {
      $("#quilt").append("<img class='piece diamond rotated"+ Math.floor(Math.random()*3) +"' src='images/colors/"+ colorChoice +"/"+ i +".png' style='z-index:"+ i +"'>");
   };
   $(".piece").draggable();
});
