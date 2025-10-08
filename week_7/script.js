console.log("🚀 CSS Animations + JavaScript learning started!");

// ============================================
// GLOBAL VARIABLES (demonstrating scope)
// ============================================

let globalScore = 0; // This is in global scope - accessible everywhere!

console.log("Global variable 'globalScore' created:", globalScore);

// ============================================
// PART 2: FUNCTIONS - SCOPE, PARAMETERS & RETURNS
// ============================================

// Function to demonstrate scope
function demonstrateScope() {
  // LOCAL variable - only exists inside this function!
  let localVariable = "I'm local! I only exist in this function.";

  const output = document.getElementById("scopeOutput");

  output.innerHTML = `
                <strong>🔍 Scope Demo:</strong><br><br>
                <strong>Global Variable:</strong> globalScore = ${globalScore}<br>
                <em>(Accessible anywhere in the code)</em><br><br>
                <strong>Local Variable:</strong> localVariable = "${localVariable}"<br>
                <em>(Only exists inside this function)</em><br><br>
                <strong>Try this:</strong> Open the console and type "globalScore" - it works!<br>
                Now try typing "localVariable" - you'll get an error because it doesn't exist outside this function!
            `;

  console.log("Inside demonstrateScope():");
  console.log("- Can access globalScore:", globalScore);
  console.log("- Can access localVariable:", localVariable);
  console.log("But outside this function, localVariable doesn't exist!");
}

// Reusable function with parameters and return value
function addNumbers(a, b) {
  // Parameters: a and b (inputs)
  // Return: the sum (output)
  console.log(`Adding ${a} + ${b}`);
  return a + b;
}

function multiplyNumbers(a, b) {
  console.log(`Multiplying ${a} × ${b}`);
  return a * b;
}

function powerOf(base, exponent) {
  console.log(`Calculating ${base} to the power of ${exponent}`);
  return Math.pow(base, exponent);
}

// Function that uses other functions (composition!)
function performOperation(operation) {
  // Get input values
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const output = document.getElementById("calcOutput");

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML = "❌ Please enter valid numbers!";
    output.style.color = "#dc3545";
    return; // Exit early if invalid
  }

  // Variable to store result
  let result;

  // Call different functions based on operation
  switch (operation) {
    case "add":
      result = addNumbers(num1, num2);
      output.innerHTML = `✅ ${num1} + ${num2} = <span style="color: #667eea;">${result}</span>`;
      break;
    case "multiply":
      result = multiplyNumbers(num1, num2);
      output.innerHTML = `✅ ${num1} × ${num2} = <span style="color: #667eea;">${result}</span>`;
      break;
    case "power":
      result = powerOf(num1, num2);
      output.innerHTML = `✅ ${num1}<sup>${num2}</sup> = <span style="color: #667eea;">${result}</span>`;
      break;
  }

  output.style.color = "#333";

  // Return the result (in case I want to use it elsewhere)
  return result;
}

// Score system demonstrating state management
function updateScore(points) {
  // This modifies the global variable
  globalScore += points;

  // Update the display
  const display = document.getElementById("scoreDisplay");
  display.textContent = globalScore;

  // Add animation
  display.style.animation = "none";
  setTimeout(() => {
    display.style.animation = "pulse 0.5s ease";
  }, 10);

  // Log the change
  console.log(`Score updated by ${points}. New score: ${globalScore}`);

  // Return the new score
  return globalScore;
}

function resetScore() {
  globalScore = 0;
  document.getElementById("scoreDisplay").textContent = globalScore;
  console.log("Score reset to 0");
  return globalScore;
}

// ============================================
// PART 3: COMBINING CSS + JAVASCRIPT
// ============================================

// Reusable function to trigger animations
function triggerAnimation(animationType) {
  const box = document.getElementById("animatedBox");

  // Remove any existing animation class first
  box.className = "animated-box";

  // Force browser to recognize the removal
  void box.offsetWidth;

  // Add the new animation class
  let animationClass;
  switch (animationType) {
    case "shake":
      animationClass = "shake-animation";
      break;
    case "bounce":
      animationClass = "bounce-animation";
      break;
    case "rotate":
      animationClass = "rotate-animation";
      break;
    case "slide":
      animationClass = "slide-in";
      break;
  }

  box.classList.add(animationClass);

  console.log(`Triggered ${animationType} animation`);

  // Remove the animation class after it completes so it can be triggered again
  setTimeout(() => {
    box.classList.remove(animationClass);
  }, 1000);
}

// Card flip function
function flipCard() {
  const card = document.getElementById("flipCard");

  // Toggle the 'flipped' class
  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped");
    console.log("Card flipped back to front");
  } else {
    card.classList.add("flipped");
    console.log("Card flipped to back");
  }
}

// Loading animation controller
function startLoading() {
  const loader = document.getElementById("loader");
  loader.classList.add("active");
  console.log("Loading animation started");
}

function stopLoading() {
  const loader = document.getElementById("loader");
  loader.classList.remove("active");
  console.log("Loading animation stopped");
}

// Animated progress bar
function animateProgress(percentage) {
  const progressBar = document.getElementById("progressBar");

  // Update width (CSS transition makes it smooth!)
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";

  console.log(`Progress set to ${percentage}%`);

  return percentage;
}

// Modal functions
function openModal() {
  const modal = document.getElementById("modalOverlay");
  modal.classList.add("show");
  console.log("Modal opened with animation");
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  modal.classList.remove("show");
  console.log("Modal closed");
}

// Bonus: Add click animation to the animated box
document.getElementById("animatedBox").addEventListener("click", function () {
  triggerAnimation("bounce");
});

// ============================================
// INITIALIZATION
// ============================================

console.log("✅ All functions loaded and ready!");
console.log("📚 Key concepts demonstrated:");
console.log("  - CSS transitions for smooth changes");
console.log("  - @keyframes for custom animations");
console.log("  - Function parameters and return values");
console.log("  - Global vs Local scope");
console.log("  - JavaScript triggering CSS animations");
console.log("  - Reusable, composable functions");
