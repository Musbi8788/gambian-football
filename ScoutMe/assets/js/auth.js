// Authentication JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initializeAuth()
})

function initializeAuth() {
  // Initialize form handling
  initAuthForms()

  // Initialize password toggles
  initPasswordToggles()

  // Initialize account type selector
  initAccountTypeSelector()

  // Initialize password strength checker
  initPasswordStrength()

  console.log("Authentication initialized")
}

// Form handling
function initAuthForms() {
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister)
  }
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const email = formData.get("email")
  const password = formData.get("password")
  const remember = formData.get("remember")

  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.innerHTML

  // Show loading state
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...'
  submitButton.disabled = true

  // Simulate authentication
  setTimeout(() => {
    // Reset button
    submitButton.innerHTML = originalText
    submitButton.disabled = false

    // Mock authentication logic
    if (email && password) {
      // Store user session
      const userData = {
        email: email,
        loginTime: new Date().toISOString(),
        remember: remember,
      }

      if (remember) {
        localStorage.setItem("userSession", JSON.stringify(userData))
      } else {
        sessionStorage.setItem("userSession", JSON.stringify(userData))
      }

      // Redirect based on email domain or user type
      if (email.includes("scout")) {
        window.location.href = "scout-dashboard.html"
      } else if (email.includes("admin")) {
        window.location.href = "team-admin-dashboard.html"
      } else {
        window.location.href = "player-dashboard.html"
      }
    } else {
      showAuthError("Please enter valid credentials")
    }
  }, 2000)
}

// Handle registration form submission
function handleRegister(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const accountType = formData.get("accountType")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
  const terms = formData.get("terms")

  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.innerHTML

  // Validation
  if (password !== confirmPassword) {
    showAuthError("Passwords do not match")
    return
  }

  if (!terms) {
    showAuthError("Please accept the terms and conditions")
    return
  }

  if (password.length < 8) {
    showAuthError("Password must be at least 8 characters long")
    return
  }

  // Show loading state
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...'
  submitButton.disabled = true

  // Simulate registration
  setTimeout(() => {
    // Reset button
    submitButton.innerHTML = originalText
    submitButton.disabled = false

    // Mock registration logic
    const userData = {
      email: email,
      accountType: accountType,
      registrationTime: new Date().toISOString(),
    }

    localStorage.setItem("userSession", JSON.stringify(userData))

    // Show success message
    showAuthSuccess("Account created successfully! Redirecting...")

    // Redirect after success message
    setTimeout(() => {
      switch (accountType) {
        case "scout":
          window.location.href = "scout-dashboard.html"
          break
        case "club":
          window.location.href = "team-admin-dashboard.html"
          break
        default:
          window.location.href = "player-dashboard.html"
      }
    }, 2000)
  }, 3000)
}

// Password toggle functionality
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll(".password-toggle")

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input")
      const icon = this.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        input.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  })
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const button = input.parentElement.querySelector(".password-toggle")
  const icon = button.querySelector("i")

  if (input.type === "password") {
    input.type = "text"
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
  } else {
    input.type = "password"
    icon.classList.remove("fa-eye-slash")
    icon.classList.add("fa-eye")
  }
}

// Account type selector
function initAccountTypeSelector() {
  const typeOptions = document.querySelectorAll(".type-option")
  const accountTypeInput = document.querySelector('input[name="accountType"]')
  const playerFields = document.querySelector(".player-fields")
  const scoutFields = document.querySelector(".scout-fields")
  const clubFields = document.querySelector(".club-fields")

  typeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      typeOptions.forEach((opt) => opt.classList.remove("active"))

      // Add active class to clicked option
      this.classList.add("active")

      // Update hidden input
      const accountType = this.getAttribute("data-type")
      if (accountTypeInput) {
        accountTypeInput.value = accountType
      }

      // Show/hide relevant fields
      if (playerFields) playerFields.style.display = accountType === "player" ? "block" : "none"
      if (scoutFields) scoutFields.style.display = accountType === "scout" ? "block" : "none"
      if (clubFields) clubFields.style.display = accountType === "club" ? "block" : "none"

      // Update required fields
      updateRequiredFields(accountType)
    })
  })
}

function updateRequiredFields(accountType) {
  // Remove required from all conditional fields
  const conditionalFields = document.querySelectorAll(
    ".player-fields input, .player-fields select, .scout-fields input, .scout-fields select, .club-fields input, .club-fields select",
  )
  conditionalFields.forEach((field) => {
    field.removeAttribute("required")
  })

  // Add required to relevant fields
  let relevantFields
  switch (accountType) {
    case "player":
      relevantFields = document.querySelectorAll(".player-fields input, .player-fields select")
      break
    case "scout":
      relevantFields = document.querySelectorAll(".scout-fields input, .scout-fields select")
      break
    case "club":
      relevantFields = document.querySelectorAll(".club-fields input, .club-fields select")
      break
  }

  if (relevantFields) {
    relevantFields.forEach((field) => {
      if (field.name !== "age") {
        // Age is optional for players
        field.setAttribute("required", "required")
      }
    })
  }
}

// Password strength checker
function initPasswordStrength() {
  const passwordInput = document.getElementById("password")
  const strengthIndicator = document.getElementById("passwordStrength")

  if (passwordInput && strengthIndicator) {
    passwordInput.addEventListener("input", function () {
      checkPasswordStrength(this.value, strengthIndicator)
    })
  }
}

function checkPasswordStrength(password, indicator) {
  let strength = 0
  let strengthText = ""
  let strengthClass = ""

  // Length check
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++

  // Character variety checks
  if (password.match(/[a-z]/)) strength++
  if (password.match(/[A-Z]/)) strength++
  if (password.match(/[0-9]/)) strength++
  if (password.match(/[^a-zA-Z0-9]/)) strength++

  // Determine strength level
  if (strength <= 2) {
    strengthClass = "weak"
    strengthText = "Weak"
  } else if (strength <= 3) {
    strengthClass = "fair"
    strengthText = "Fair"
  } else if (strength <= 4) {
    strengthClass = "good"
    strengthText = "Good"
  } else {
    strengthClass = "strong"
    strengthText = "Strong"
  }

  // Update indicator
  indicator.className = `password-strength ${strengthClass}`
  indicator.setAttribute("data-strength", strengthText)

  // Add text indicator if it doesn't exist
  let textIndicator = indicator.nextElementSibling
  if (!textIndicator || !textIndicator.classList.contains("strength-text")) {
    textIndicator = document.createElement("div")
    textIndicator.className = "strength-text"
    textIndicator.style.cssText = `
            font-size: 0.75rem;
            margin-top: 4px;
            font-weight: 500;
        `
    indicator.parentNode.insertBefore(textIndicator, indicator.nextSibling)
  }

  textIndicator.textContent = password ? `Password strength: ${strengthText}` : ""
  textIndicator.style.color = getStrengthColor(strengthClass)
}

function getStrengthColor(strengthClass) {
  const colors = {
    weak: "var(--error)",
    fair: "var(--warning)",
    good: "var(--info)",
    strong: "var(--success)",
  }
  return colors[strengthClass] || "var(--text-muted)"
}

// Error and success messages
function showAuthError(message) {
  showAuthMessage(message, "error")
}

function showAuthSuccess(message) {
  showAuthMessage(message, "success")
}

function showAuthMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector(".auth-message")
  if (existingMessage) {
    existingMessage.remove()
  }

  const messageEl = document.createElement("div")
  messageEl.className = `auth-message auth-message-${type}`
  messageEl.style.cssText = `
        padding: var(--space);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-lg);
        font-size: 0.875rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    `

  const iconMap = {
    error: "times-circle",
    success: "check-circle",
    warning: "exclamation-triangle",
  }

  if (type === "error") {
    messageEl.style.background = "rgba(239, 68, 68, 0.1)"
    messageEl.style.color = "var(--error)"
    messageEl.style.border = "1px solid rgba(239, 68, 68, 0.2)"
  } else if (type === "success") {
    messageEl.style.background = "rgba(16, 185, 129, 0.1)"
    messageEl.style.color = "var(--success)"
    messageEl.style.border = "1px solid rgba(16, 185, 129, 0.2)"
  }

  messageEl.innerHTML = `
        <i class="fas fa-${iconMap[type]}"></i>
        <span>${message}</span>
    `

  // Insert before the form
  const form = document.querySelector(".auth-form")
  if (form) {
    form.parentNode.insertBefore(messageEl, form)
  }

  // Auto-remove success messages
  if (type === "success") {
    setTimeout(() => {
      if (messageEl.parentElement) {
        messageEl.remove()
      }
    }, 5000)
  }
}

// Social login handlers (mock)
function handleGoogleLogin() {
  showAuthMessage("Google login is not yet implemented", "warning")
}

function handleFacebookLogin() {
  showAuthMessage("Facebook login is not yet implemented", "warning")
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\+?[\d\s\-$$$$]+$/
  return re.test(phone) && phone.replace(/\D/g, "").length >= 7
}

// Real-time validation
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input[type="email"], input[type="tel"]')

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(this)
    })

    input.addEventListener("input", function () {
      clearInputError(this)
    })
  })
})

function validateInput(input) {
  const value = input.value.trim()
  let isValid = true
  let errorMessage = ""

  if (input.type === "email" && value) {
    if (!validateEmail(value)) {
      isValid = false
      errorMessage = "Please enter a valid email address"
    }
  }

  if (input.type === "tel" && value) {
    if (!validatePhone(value)) {
      isValid = false
      errorMessage = "Please enter a valid phone number"
    }
  }

  if (!isValid) {
    showInputError(input, errorMessage)
  } else {
    clearInputError(input)
  }

  return isValid
}

function showInputError(input, message) {
  clearInputError(input)

  input.style.borderColor = "var(--error)"

  const errorEl = document.createElement("div")
  errorEl.className = "input-error"
  errorEl.style.cssText = `
        color: var(--error);
        font-size: 0.75rem;
        margin-top: 4px;
    `
  errorEl.textContent = message

  input.parentNode.insertBefore(errorEl, input.nextSibling)
}

function clearInputError(input) {
  input.style.borderColor = ""

  const errorEl = input.parentNode.querySelector(".input-error")
  if (errorEl) {
    errorEl.remove()
  }
}
