// Slideshow Section
let slideIndex = 0;
showSlides(); // Start the slideshow

// Function to display the slideshow images and control the dot indicators
function showSlides() {
  let i;
  // Select all elements with the class "mySlides" (the images in the slideshow)
  let slides = document.getElementsByClassName("mySlides");
  // Select all elements with the class "dot" (the dots for each slide)
  let dots = document.getElementsByClassName("dot");

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Reset to the first slide if it goes past the last one

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Set the slideshow to change every 4 seconds
  setTimeout(showSlides, 4000);
}

// Rating Section
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied"; // Default rating

// Function to remove the "active" class from all rating elements
const removeActive = () => {
  ratings.forEach((rating) => rating.classList.remove("active"));
};

// Add click event to handle rating selection
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".rating")) {
    removeActive(); // Remove "active" from all ratings
    e.target.closest(".rating").classList.add("active"); // Add "active" to the selected rating
    selectedRating = e.target.closest(".rating").querySelector("small").innerText; // Update selected rating
  }
});

// Event listener for "Send" button click
sendButton.addEventListener("click", () => {
  // Display a thank-you message with the selected rating
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

// Testimonials Section
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

// Array of testimonials with name, position, photo, and text
const testimonials = [
  {
    name: "Emily Rose",
    position: "Bride",
    photo:
      "https://images.unsplash.com/photo-1501466044931-62695aada8f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    text:
      "The Photoshop team captured our wedding day beautifully. Every photo and video brings us back to the emotions we felt on that day. They have such an eye for detail and truly made us feel special. Highly recommended!",
  },
  {
    name: "James Hudson",
    position: "Groom",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    text:
      "Working with The Photoshop was one of the best decisions we made for our wedding. They were professional, friendly, and understood exactly what we wanted. The final videos were beyond our expectations!",
  },
  {
    name: "Sophia Lin",
    position: "Bride",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "From our engagement shoot to the wedding day, The Photoshop was incredible. The photos are like artwork, and the video captured moments we didn’t even realize were happening. We couldn’t be happier!",
  },
  {
    name: "Michael Green",
    position: "Groom",
    photo: "https://randomuser.me/api/portraits/men/40.jpg",
    text:
      "These guys are amazing! They made us feel comfortable and were so easy to work with. The photos and video are stunning and perfectly captured the joy of our day. We will treasure them forever.",
  },
  {
    name: "Laura Bennett",
    position: "Bride",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    text:
      "Our experience with The Photoshop was flawless from start to finish. They were professional, creative, and so talented. The final photos and video are everything we dreamed of and more!",
  },
  {
    name: "Daniel Clarke",
    position: "Groom",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    text:
      "I can't thank The Photoshop team enough for their work on our wedding day. They went above and beyond to capture every special moment. The video makes us tear up every time we watch it!",
  },
  {
    name: "Anna Flores",
    position: "Bride",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    text:
      "The Photoshop team made our wedding day even more magical. They captured every laugh, every tear, and every hug. We couldn’t have asked for a better experience or more beautiful photos.",
  },
];

let index = 1; // Start index for testimonials

// Function to update testimonial display
const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index]; // Get current testimonial details
  testimonial.innerHTML = text; // Update testimonial text
  userImage.src = photo; // Update user image
  username.innerHTML = name; // Update username
  role.innerHTML = position; // Update user role (Bride/Groom)
  index++; // Move to the next testimonial
  if (index > testimonials.length - 1) index = 0; // Reset index if it exceeds testimonial count
};

// Change testimonial every 10 seconds
setInterval(updateTestimonial, 10000);
