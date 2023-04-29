var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i]);
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 3000); // tiempo en milisegundos (5 segundos)
}
