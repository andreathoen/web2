function showModal(item) { //show modal popout
	$(".modal").empty(); //empty modal
   
	//identify the h1 by item.name
   var $img = $("<img>").attr("src",item.imageURL);
   //identify the img by item.image
   var $h1 = $("<h3>").text(item.name);
   var $p = $("<p>").text(item.Description);//identify the bodytext by item.description

   $(".modal").append($h1,$img,$p);//adding the content into the modal popout
   
   $(".overlay").show(); //show grayed out background when img is clicked on
   $(".modal").show();//show modal popout when img is clicked

}

function hideModal() {//display none modal when overlay in clicked again
  $(".overlay").hide();
  $(".modal").hide();
}

function addItem(item) {
	
	/*
	var $li = $("<li>").addClass("item");//creating a list element with a class of item and a color
	

	$burgee.attr("data-category",item.affiliation); //adding an attribute of data category to the item.color
	$li.attr("data-region",item.location);
	
	var $h2 = $("<h2 class='name'>").text(item.name);//creating a a h2 element 
	var $p = $("<p class='description'>").text(item.established);//creating description to go with data

	$li.append($h2,$p); //adding the h2 and description 
*/
	
	var $burgee=$('<img>').attr("src",item.imageURL).addClass("item")
	
	$burgee.attr("data-location",item.location);
	$burgee.attr("data-category",item.affiliation);
	$burgee.attr("data-shape",item.shape);  
	$burgee.attr("data-name",item.name);
			//adding an attribute of data category to the item.color
	
  $burgee.on("click",function(e) {//on click of the image show the modal
      showModal(item);
  });

  $(".collection").append($burgee);//adding the collection to the li elemetns
};

function addItems(data) {//identifying that the different items are part of the whole data
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
}


function callback(data) { 

  addItems(data);

  var $container = $('.collection');//selecting the containers to filter through??
  $container.packery({
    itemSelector: '.item',
    gutter: 10,
  });


  $container.imagesLoaded( function() {
    $container.packery();
  });
  
  
  
  var myCollection = $(".item").collection({//identify filters by the h2 and data-category input
    filters: { 
      "title": "[data-name]",
      "category": "[data-category]",
	"location": "[data-location]",
	"shape": "[data-shape]",
    },

   
   
    update: function() { //timing of filter through animation of packery?
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
	    $container.packery('reloadItems');//calling the reload of packery when filtered through 
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },//hide the data that doesnt apply
    show: function($elem) { $elem.fadeIn(500); },//show the data that does
  });

  $(".category").on("click",function(e) {//applying the toggles of color buttons
      var category = $(this).data("category");
      $("#filter-bar button.category").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("category",category);
  });

  $(".location-button").on("click",function(e) {//applying the toggles of color buttons
      var category = $(this).data("location");
      $("#filter-bar .location-button").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("location",category);
  });

  $(".shape-button").on("click",function(e) {//applying the toggles of color buttons
      var category = $(this).data("shape");
      $("#filter-bar .shape-button").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("shape",category);
  });



  $("#search").on("change keyup",function(e) {//as it searches look for the title (h1)
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {//on click of overlay hide modal
      hideModal();
  });

}

Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1sIAZ7KRvL8dXUzCowxeVPK4dUt9Lfm_NHFpTq7y2z5Q/pubhtml",
                   callback: callback,
                   simpleSheet: true } )
 
