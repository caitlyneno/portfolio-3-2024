document.addEventListener("DOMContentLoaded", function () {
  // Testimonials
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });
    testimonials[index].classList.add("active");
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  // Show the first testimonial initially
  if (testimonials.length > 0) {
    showTestimonial(index);
    setInterval(nextTestimonial, 3000);
  }

  // Hamburger menu
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".navigation.mobile-menu");
  const closeIcon = document.querySelector(".close-icon"); // Ensure this selector matches your close icon

  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("is-active");
    });
  }

  // Close icon functionality within the same DOMContentLoaded listener
  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      mobileMenu.classList.remove("is-active");
    });
  }

  // Testimonial navigation arrows
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");

  if (prevArrow) {
    prevArrow.addEventListener("click", prevTestimonial);
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", nextTestimonial);
  }
});
