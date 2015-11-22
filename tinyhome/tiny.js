
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






