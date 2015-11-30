function addItems(data){
	
	console.log(data)
	
	morecatsloop(data);
}

function morecatsloop(data) {
  	for(var i = 0; i < data.items.length; i++) {
   	   morecats(data.items[i]);
  }
}

function morecats(item) {
	
	var imageUrl = item.snippet.thumbnails.medium.url

  	var $container = $(".container");
  	var $box = $("<div class='box'>");
  	var $img = $("<img>").attr("src",imageUrl);
  
  	$box.append($img);
  
  	$container.append($box);
	
      $box.on("click",function(e) {
        showModal(item);
      });
}

function showModal(item) {

  var imageUrl =  item.snippet.thumbnails.medium.url;
  
  $(".modal").empty();
   
  var $img = $("<img>").attr("src",imageUrl);

 	$(".modal").append($img);
      $(".overlay").show();
      $(".overlay").one("click",function(e) {
        hideModal();
      });
      $(".modal").show();
	
   
}
	function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}