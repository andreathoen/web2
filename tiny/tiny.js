
$(".scroller").scrollFlight();

$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});

$(".textwrapper").on("arriving",function() {
  $(this).addClass("arriving");
});

$(".pull-quote").on("arriving",function() {
  $(this).addClass("arriving");
});

$(".blurb").on("arriving",function() {
  $(this).addClass("arriving");

});

//$(".pull-quote").on("arriving",function() {
  //$(this).addClass("arriving");

  $("#trailer").mouseover(function() {
    $('#hiddenbodytxt').show();
    
    $("#bodytext").hide();
});

$("#trailer").mouseout(function() {
  $('#hiddenbodytxt').hide();
  
  $("#bodytext").show();
});

  
  
  $("#frame").mouseover(function() {
    $('#hiddenbodytxt1').show();
    
    $("#bodytext1").hide();
});

$("#frame").mouseout(function() {
  $('#hiddenbodytxt1').hide();
  
  $("#bodytext1").show();
});


  
  $("#structure").mouseover(function() {
    $('#hiddenbodytxt2').show();
    
    $("#bodytext2").hide();
});

$("#structure").mouseout(function() {
  $('#hiddenbodytxt2').hide();
  
  $("#bodytext2").show();
});


 
  $("#siding").mouseover(function() {
    $('#hiddenbodytxt3').show();
    
    $("#bodytext3").hide();
});

$("#siding").mouseout(function() {
  $('#hiddenbodytxt3').hide();
  
  $("#bodytext3").show();
});


  
  $("#snow").mouseover(function() {
    $('#hiddenbodytxt4').show();
    
    $("#bodytext4").hide();
});

$("#snow").mouseout(function() {
  $('#hiddenbodytxt4').hide();
  
  $("#bodytext4").show();
});

$(".svg-scroller").on("arrived",function(e) {
  var src = $(this).data("src");
  $(this).append("<img src='" + src + "'/>");
});
