function myFunction() {
    var x = document.getElementById("myTopnav");
     if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

        $(function() {
            
                var $wrapper= $( '#fc-wrapper' ),
                    $handle = $wrapper.children( 'div.fc-handle-pull' );
                
                $handle.on( 'click', function( event ) {
                
                    ( $handle.data( 'opened' ) ) ? close() : open();
                
                } );
                
                $wrapper.hammer().bind( 'dragend', function( event ) {
                    switch( event.direction ) {
                        case 'right'    : open(); break;
                        case 'left'     : close(); break;
                    }
                });
                
                function open() {
                        $wrapper.addClass( 'fc-wrapper-open' );
                    $handle.data( 'opened', true );
                }
                
                function close() {
                        $wrapper.removeClass( 'fc-wrapper-open' );
                    $handle.data( 'opened', false );
                    }
            
            } );
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
document.querySelector(".flip-container").classList.toggle("flip");
});
$("ul.thumb li").hover(function() {
  $(this).css({'z-index' : '10'}); /*Add a higher z-index value so this image stays on top*/ 
  $(this).find('img').addClass("hover").stop() /* Add class of "hover", then stop animation queue buildup*/
    .animate({
      marginTop: '-110px', /* The next 4 lines will vertically align this image */ 
      marginLeft: '-110px',
      top: '50%',
      left: '50%',
      width: '174px', /* Set new width */
      height: '174px', /* Set new height */
      padding: '20px'
    }, 200); /* this value of "200" is the speed of how fast/slow this hover animates */

  } , function() {
  $(this).css({'z-index' : '0'}); /* Set z-index back to 0 */
  $(this).find('img').removeClass("hover").stop()  /* Remove the "hover" class , then stop animation queue buildup*/
    .animate({
      marginTop: '0', /* Set alignment back to default */
      marginLeft: '0',
      top: '0',
      left: '0',
      width: '100px', /* Set width back to default */
      height: '100px', /* Set height back to default */
      padding: '5px'
    }, 400);
});
function mydd() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
