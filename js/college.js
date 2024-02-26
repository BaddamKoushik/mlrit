let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function validateForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill out all fields');
      return;
    }
  
    alert('Form submitted successfully!');
    document.getElementById('myForm').reset();
  }


  // document.getElementById("login-form").addEventListener("submit", function (event) {
  //   event.preventDefault();
  
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  
  //   // Perform login validation and authentication here
  
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // });
