function checkUserInfo() {
  // Variables and data types
  const name = document.getElementById("userName").value;
  const age = parseInt(document.getElementById("userAge").value);
  const score = parseInt(document.getElementById("userScore").value);
  const output = document.getElementById("basicsOutput");

  // Validation
  if (!name || isNaN(age) || isNaN(score)) {
    output.textContent = "❌ Please fill in all fields!";
    output.className = "output error";
    return;
  }
  if (score < 0 || score > 100) {
    output.textContent = "📍Fill between 0 and 100";
    output.className = "output error";
    return;
  }

  // Conditionals and operators
  let ageCategory;
  if (age < 13) {
    ageCategory = "Child";
  } else if (age < 20) {
    ageCategory = "Teenager";
  } else if (age < 60) {
    ageCategory = "Adult";
  } else {
    ageCategory = "Senior Adult";
  }

  // Grade calculation
  let grade;
  if (score >= 80) grade = "A";
  else if (score >= 70) grade = "B";
  else if (score >= 60) grade = "C";
  else if (score >= 50) grade = "D";
  else grade = "F";

  const passed = score >= 50;

  // Output results
  output.innerHTML = `
                <strong>Analysis Results:</strong><br>
                👤 Name: ${name}<br>
                🎂 Age: ${age} (${ageCategory})<br>
                📊 Score: ${score}/100<br>
                🎓 Grade: ${grade}<br>
                ${passed ? "✅ Status: PASSED!" : "❌ Status: Failed"}
            `;
  output.className = passed ? "output success" : "output error";

  console.log(
    `User Info - Name: ${name}, Age: ${age}, Score: ${score}, Grade: ${grade}`
  );
}

// ========================================
// PART 2: FUNCTIONS - REUSABILITY
// ========================================

// Function to calculate sum
function calculateSum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Function to calculate tax
function applyTax(amount, taxRate) {
  return amount * (1 + taxRate / 100);
}

// Function to format currency
function formatCurrency(amount) {
  return `#${amount.toFixed(2)}`;
}

function calculateTotal() {
  const price1 = parseFloat(document.getElementById("item1").value) || 0;
  const price2 = parseFloat(document.getElementById("item2").value) || 0;
  const price3 = parseFloat(document.getElementById("item3").value) || 0;
  const tax = parseFloat(document.getElementById("taxRate").value) || 0;

  const prices = [price1, price2, price3];
  const subtotal = calculateSum(prices);
  const total = applyTax(subtotal, tax);
  const taxAmount = total - subtotal;

  const output = document.getElementById("functionsOutput");
  output.innerHTML = `
                <strong>🛒 Shopping Cart Summary:</strong><br>
                Item 1: ${formatCurrency(price1)}<br>
                Item 2: ${formatCurrency(price2)}<br>
                Item 3: ${formatCurrency(price3)}<br>
                <hr style="margin: 0.5rem 0;">
                Subtotal: ${formatCurrency(subtotal)}<br>
                Tax (${tax}%): ${formatCurrency(taxAmount)}<br>
                <strong>Total: ${formatCurrency(total)}</strong>
            `;
  output.className = "output success";
}

// Text formatting functions
function toUpperCase(text) {
  return text.toUpperCase();
}

function toLowerCase(text) {
  return text.toLowerCase();
}

function toTitleCase(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function formatText(type) {
  const input = document.getElementById("textInput").value;
  const output = document.getElementById("textOutput");

  if (!input) {
    output.textContent = "❌ Please enter some text!";
    output.className = "output error";
    return;
  }

  let result;
  switch (type) {
    case "upper":
      result = toUpperCase(input);
      break;
    case "lower":
      result = toLowerCase(input);
      break;
    case "title":
      result = toTitleCase(input);
      break;
    case "reverse":
      result = reverseText(input);
      break;
  }

  output.textContent = `✨ ${result}`;
  output.className = "output success";
}

// ========================================
// PART 3: LOOPS & ITERATION
// ========================================

function generateCards() {
  const count = parseInt(document.getElementById("cardCount").value) || 6;
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  // Using a for loop to generate cards
  for (let i = 1; i <= count; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>Card ${i}</h3><p>Item #${i}</p>`;

    // Add click event
    card.addEventListener("click", function () {
      alert(`You clicked Card ${i}!`);
    });

    container.appendChild(card);
  }

  console.log(`Generated ${count} cards using a for loop`);
}

// Countdown functionality
let countdownInterval;
let currentCount = 10;

function startCountdown() {
  stopCountdown(); // Clear any existing countdown
  currentCount = 10;

  countdownInterval = setInterval(() => {
    document.getElementById("countdown").textContent = currentCount;

    if (currentCount <= 0) {
      stopCountdown();
      document.getElementById("countdown").textContent = "🎉 Done!";
      alert("Countdown Complete!");
    }
    currentCount--;
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  stopCountdown();
  currentCount = 10;
  document.getElementById("countdown").textContent = "10";
}

// ========================================
// PART 4: DOM MANIPULATION
// ========================================

let todoCounter = 0;

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (!todoText) {
    alert("Please enter a task!");
    return;
  }

  // Create new todo element
  const todoList = document.getElementById("todoList");
  const todoItem = document.createElement("div");
  todoItem.className = "list-item";
  todoItem.id = "todo-" + todoCounter;

  todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn" onclick="deleteTodo('todo-${todoCounter}')">Delete</button>
            `;

  // Add click to toggle completion
  todoItem.querySelector("span").addEventListener("click", function () {
    this.style.textDecoration =
      this.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  todoList.appendChild(todoItem);
  input.value = "";
  todoCounter++;

  console.log("Added new todo item");
}

function deleteTodo(id) {
  const element = document.getElementById(id);
  element.style.transition = "all 0.3s";
  element.style.opacity = "0";
  element.style.transform = "translateX(100px)";

  setTimeout(() => {
    element.remove();
  }, 300);
}

function clearAllTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  console.log("Cleared all todos");
}

function changeTheme(theme) {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    switch (theme) {
      case "light":
        section.style.background = "white";
        section.style.color = "#333";
        break;
      case "dark":
        section.style.background = "#2d3436";
        section.style.color = "white";
        break;
      case "colorful":
        section.style.background =
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
        section.style.color = "white";
        break;
    }
  });

  console.log(`Changed theme to: ${theme}`);
}
