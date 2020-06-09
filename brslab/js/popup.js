// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var card = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the card, open the modal 
card.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
}



 // Get the modal2
 var modal2 = document.getElementById("myModal2");
    
 // Get the button that opens the modal2
 var card2 = document.getElementById("myBtn2");
 
 // Get the <span> element that closes the modal2
 var span2 = document.getElementsByClassName("close2")[0];
 
 // When the user clicks the card, open the modal 2
 card2.onclick = function() {
   modal2.style.display = "block";
   document.body.style.overflow = "hidden";
 }
 
 // When the user clicks on <span> (x), close the modal2
 span2.onclick = function() {
   modal2.style.display = "none";
   document.body.style.overflow = "scroll";
 }
 

 // Get the modal3
 var modal3 = document.getElementById("myModal3");
    
 // Get the button that opens the modal3
 var card3 = document.getElementById("myBtn3");
 
 // Get the <span> element that closes the modal3
 var span3 = document.getElementsByClassName("close3")[0];
 
 // When the user clicks the card, open the modal 3
 card3.onclick = function() {
   modal3.style.display = "block";
   document.body.style.overflow = "hidden";
 }
 
 // When the user clicks on <span> (x), close the modal3
 span3.onclick = function() {
   modal3.style.display = "none";
   document.body.style.overflow = "scroll";
 }
 
 // When the user clicks anywhere outside of the modal, close it3
 window.onclick = function(event) {
   if (event.target==myModal|| event.target==myModal2|| event.target == myModal3) {
     modal.style.display ="none";
     modal2.style.display = "none";
     modal3.style.display = "none";
     document.body.style.overflow = "scroll";
   }
 }