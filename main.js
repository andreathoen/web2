$(".scroller").scrollFlight();
$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});