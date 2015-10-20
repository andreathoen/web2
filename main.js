$(".knob").on("click",function(e){
	$(",arms").toggle();
})



<button id='knob'>Off</button>

<script>
var buttonIsOn = false;

$(".knob").on("click",function(e) {
  if(buttonIsOn) {
    buttonIsOn = false;
    $(this).text("Off");
  } else {
    buttonIsOn = true;
    $(this).text("On");
  }
});