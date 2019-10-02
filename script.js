 //Get the button
 const mybutton = document.getElementById("myBtn");

 window.onscroll = () => scrollFunction();

 // When the user scrolls down 300px from the top of the document, show the button

 const scrollFunction = () => {
     document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ? mybutton.style.display = "block" : mybutton.style.display = "none";
 }

 // When the user clicks on the button, scroll to the top of the document
 const topFunction = () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }