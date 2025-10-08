// ============================================
// PART 1: EVENT HANDLING EXPERIMENTS
// ============================================

console.log("🚀 Starting my JavaScript learning journey!");

// Experiment 1: Click Events
// I'm learning that addEventListener lets me "listen" for events!
let clickCount = 0;

document.getElementById("clickBtn").addEventListener("click", function () {
  // This function runs when the button is clicked
  document.getElementById("clickOutput").textContent =
    "🎉 You clicked me! Great job!";
  document.getElementById("clickOutput").style.color = "#28a745";
  console.log("Button was clicked!");
});

document.getElementById("clickCountBtn").addEventListener("click", function () {
  clickCount++; // Increase the count
  document.getElementById(
    "clickOutput"
  ).textContent = `Click count: ${clickCount}`;
  document.getElementById("clickOutput").style.color = "#667eea";
  console.log(`Total clicks: ${clickCount}`);
});

// Experiment 2: Hover Events
// Let me try mouseover and mouseout events
const hoverBox = document.getElementById("hoverBox");
const hoverStatus = document.getElementById("hoverStatus");

hoverBox.addEventListener("mouseover", function () {
  // This runs when mouse enters the box
  hoverStatus.textContent = "😊 Hey! You're hovering over me!";
  hoverStatus.style.color = "#667eea";
  hoverBox.style.background = "#e7f3ff";
  console.log("Mouse entered the box");
});

hoverBox.addEventListener("mouseout", function () {
  // This runs when mouse leaves the box
  hoverStatus.textContent = "😢 Aww, you left...";
  hoverStatus.style.color = "#dc3545";
  hoverBox.style.background = "#f8f9fa";
  console.log("Mouse left the box");
});

// Experiment 3: Keyboard Events
// I want to capture what the user types in real-time!
const keyboardInput = document.getElementById("keyboardInput");
const keyboardOutput = document.getElementById("keyboardOutput");

keyboardInput.addEventListener("input", function (event) {
  // 'event' contains information about what happened
  const typedText = event.target.value;

  if (typedText.length === 0) {
    keyboardOutput.textContent = "Start typing...";
  } else {
    keyboardOutput.textContent = `You typed: "${typedText}" (${typedText.length} characters)`;
  }

  console.log(`Current input: ${typedText}`);
});

// ============================================
// PART 2: INTERACTIVE ELEMENTS
// ============================================

// Project 1: Dark Mode Toggle
// I'm combining event listeners with DOM manipulation!
const darkModeToggle = document.getElementById("darkModeToggle");
const modeLabel = document.getElementById("modeLabel");

darkModeToggle.addEventListener("change", function () {
  // 'this.checked' tells me if the toggle is on or off
  if (this.checked) {
    document.body.classList.add("dark-mode");
    modeLabel.textContent = "Dark Mode";
    console.log("Switched to dark mode");
  } else {
    document.body.classList.remove("dark-mode");
    modeLabel.textContent = "Light Mode";
    console.log("Switched to light mode");
  }
});

// Project 2: Counter Game
// Simple but fun! Teaching me about state management
let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");

document.getElementById("incrementBtn").addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
  console.log(`Counter increased to: ${counter}`);
});

document.getElementById("decrementBtn").addEventListener("click", function () {
  counter--;
  counterDisplay.textContent = counter;
  console.log(`Counter decreased to: ${counter}`);
});

document.getElementById("resetBtn").addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
  console.log("Counter reset to 0");
});

// Project 3: Collapsible FAQ
// This function toggles the answer visibility
function toggleFAQ(questionElement) {
  // Find the answer element (it's the next sibling)
  const answer = questionElement.nextElementSibling;
  const arrow = questionElement.querySelector("span:last-child");

  // Toggle the 'show' class to display or hide
  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
    arrow.textContent = "▼";
    console.log("FAQ closed");
  } else {
    answer.classList.add("show");
    arrow.textContent = "▲";
    console.log("FAQ opened");
  }
}

// Project 4: Tabbed Interface
// I learned this pattern is common in web development!
function showTab(event, tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to clicked tab
  event.target.classList.add("active");

  console.log(`Switched to tab: ${tabId}`);
}

// ============================================
// PART 3: FORM VALIDATION
// ============================================

console.log("Setting up form validation...");

// Get form elements
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");

// Validation functions - I'm learning to break code into small functions!

function validateName() {
  const nameValue = fullName.value.trim();
  const errorElement = document.getElementById("nameError");

  // Check if name is empty
  if (nameValue === "") {
    showError(fullName, errorElement, "Name is required!");
    return false;
  }

  // Check if name is at least 2 characters
  if (nameValue.length < 2) {
    showError(fullName, errorElement, "Name must be at least 2 characters");
    return false;
  }

  // Success!
  showSuccess(fullName, errorElement);
  return true;
}

function validateEmail() {
  const emailValue = email.value.trim();
  const errorElement = document.getElementById("emailError");

  if (emailValue === "") {
    showError(email, errorElement, "Email is required!");
    return false;
  }

  // Regular expression - it's like a pattern matcher!
  // This checks if email looks valid (has @ and .)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    showError(email, errorElement, "Please enter a valid email");
    return false;
  }

  showSuccess(email, errorElement);
  return true;
}

function validatePassword() {
  const passwordValue = password.value;
  const errorElement = document.getElementById("passwordError");

  if (passwordValue === "") {
    showError(password, errorElement, "Password is required!");
    return false;
  }

  if (passwordValue.length < 8) {
    showError(password, errorElement, "Password must be at least 8 characters");
    return false;
  }

  // Check if password has at least one number
  if (!/\d/.test(passwordValue)) {
    showError(
      password,
      errorElement,
      "Password must contain at least one number"
    );
    return false;
  }

  showSuccess(password, errorElement);
  return true;
}

function validateConfirmPassword() {
  const confirmValue = confirmPassword.value;
  const passwordValue = password.value;
  const errorElement = document.getElementById("confirmError");

  if (confirmValue === "") {
    showError(confirmPassword, errorElement, "Please confirm your password");
    return false;
  }

  if (confirmValue !== passwordValue) {
    showError(confirmPassword, errorElement, "Passwords do not match!");
    return false;
  }

  showSuccess(confirmPassword, errorElement);
  return true;
}

function validateAge() {
  const ageValue = age.value;
  const errorElement = document.getElementById("ageError");

  // Age is optional, so empty is okay
  if (ageValue === "") {
    age.classList.remove("error", "success");
    errorElement.classList.remove("show");
    return true;
  }

  const ageNum = parseInt(ageValue);

  if (ageNum < 13) {
    showError(age, errorElement, "You must be at least 13 years old");
    return false;
  }

  if (ageNum > 120) {
    showError(age, errorElement, "Please enter a valid age");
    return false;
  }

  showSuccess(age, errorElement);
  return true;
}

// Helper functions to show errors and success
function showError(input, errorElement, message) {
  input.classList.remove("success");
  input.classList.add("error");
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

function showSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.classList.remove("show");
}

// Real-time validation as user types!
fullName.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);
age.addEventListener("blur", validateAge);

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting normally

  console.log("Form submitted! Let me validate everything...");

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();
  const isAgeValid = validateAge();

  // Check if ALL validations passed
  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmValid &&
    isAgeValid;

  if (isFormValid) {
    // Success! Show success message
    document.getElementById("successMessage").classList.add("show");
    console.log("✅ Form is valid! All checks passed!");
    console.log("Form data:", {
      name: fullName.value,
      email: email.value,
      age: age.value || "Not provided",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      document.getElementById("successMessage").classList.remove("show");
      form.reset(); // Clear the form

      // Remove all validation classes
      document.querySelectorAll(".error, .success").forEach((el) => {
        el.classList.remove("error", "success");
      });
    }, 5000);
  } else {
    console.log("❌ Form has errors! Please fix them.");
  }
});

console.log("✅ All event listeners set up! Ready to learn and experiment!");
