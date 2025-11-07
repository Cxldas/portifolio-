// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  const menuBtn = document.getElementById("menuBtn")

  mobileNav.classList.toggle("active")
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  const mobileNav = document.getElementById("mobileNav")

  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    // Close mobile menu if open
    mobileNav.classList.remove("active")
  }
}

// Form Submission
function handleFormSubmit(event) {
  event.preventDefault()

  const form = document.getElementById("contactForm")
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  const successMessage = document.getElementById("successMessage")

  // Log form data (replace with actual API call if needed)
  console.log("Form submitted:", { name, email, message })

  // Show success message
  successMessage.style.display = "block"

  // Reset form
  form.reset()

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none"
  }, 3000)
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileNav = document.getElementById("mobileNav")
  const menuBtn = document.getElementById("menuBtn")
  const navbar = document.querySelector(".navbar")

  if (!navbar.contains(event.target) && mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active")
  }
})
