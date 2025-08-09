// Dashboard JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initializeDashboard()
})

function initializeDashboard() {
  // Initialize sidebar
  initSidebar()

  // Initialize notifications
  initNotifications()

  // Initialize dashboard features
  initDashboardFeatures()

  // Check authentication
  checkAuthentication()

  console.log("Dashboard initialized")
}

// Sidebar functionality
function initSidebar() {
  const sidebarToggle = document.getElementById("sidebarToggle")
  const sidebar = document.querySelector(".sidebar")
  const mainContent = document.querySelector(".main-content")

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")

      // Close sidebar when clicking outside on mobile
      if (sidebar.classList.contains("active")) {
        document.addEventListener("click", closeSidebarOnOutsideClick)
      } else {
        document.removeEventListener("click", closeSidebarOnOutsideClick)
      }
    })
  }

  function closeSidebarOnOutsideClick(e) {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove("active")
      document.removeEventListener("click", closeSidebarOnOutsideClick)
    }
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.remove("active")
      document.removeEventListener("click", closeSidebarOnOutsideClick)
    }
  })
}

// Notifications functionality
function initNotifications() {
  const notificationBtn = document.querySelector(".notification-btn")
  const notificationDropdown = document.getElementById("notificationDropdown")

  if (notificationBtn && notificationDropdown) {
    notificationBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleNotifications()
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!notificationDropdown.contains(e.target)) {
        notificationDropdown.classList.remove("active")
      }
    })
  }
}

function toggleNotifications() {
  const notificationDropdown = document.getElementById("notificationDropdown")
  if (notificationDropdown) {
    notificationDropdown.classList.toggle("active")
  }
}

function markAllRead() {
  const unreadItems = document.querySelectorAll(".notification-item.unread")
  unreadItems.forEach((item) => {
    item.classList.remove("unread")
  })

  // Update notification count
  const notificationCount = document.querySelector(".notification-count")
  if (notificationCount) {
    notificationCount.textContent = "0"
    notificationCount.style.display = "none"
  }

  showNotification("All notifications marked as read", "success")
}

// Dashboard features
function initDashboardFeatures() {
  // Initialize auto-save for forms
  initAutoSave()

  // Initialize real-time updates
  initRealTimeUpdates()

  // Initialize tooltips
  initTooltips()
}

// Auto-save functionality
function initAutoSave() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, select, textarea")

    inputs.forEach((input) => {
      input.addEventListener(
        "input",
        debounce(() => {
          autoSaveForm(form)
        }, 1000),
      )
    })
  })
}

function autoSaveForm(form) {
  const formId = form.id
  if (!formId) return

  const formData = {}
  const inputs = form.querySelectorAll("input, select, textarea")

  inputs.forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      if (input.checked) {
        formData[input.name] = input.value
      }
    } else {
      formData[input.name] = input.value
    }
  })

  localStorage.setItem(`autosave_${formId}`, JSON.stringify(formData))

  // Show auto-save indicator
  showAutoSaveIndicator()
}

function showAutoSaveIndicator() {
  const indicator = document.createElement("div")
  indicator.className = "autosave-indicator"
  indicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: var(--space-sm) var(--space);
        border-radius: var(--radius-md);
        font-size: 0.875rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `
  indicator.innerHTML = '<i class="fas fa-check"></i> Auto-saved'

  document.body.appendChild(indicator)

  setTimeout(() => (indicator.style.opacity = "1"), 100)
  setTimeout(() => {
    indicator.style.opacity = "0"
    setTimeout(() => indicator.remove(), 300)
  }, 2000)
}

// Real-time updates simulation
function initRealTimeUpdates() {
  // Simulate real-time stat updates
  setInterval(updateStats, 30000) // Update every 30 seconds

  // Simulate new notifications
  setInterval(addRandomNotification, 60000) // Add notification every minute
}

function updateStats() {
  const statValues = document.querySelectorAll(".stat-value")

  statValues.forEach((stat) => {
    const currentValue = Number.parseInt(stat.textContent)
    const change = Math.floor(Math.random() * 5) - 2 // Random change between -2 and +2
    const newValue = Math.max(0, currentValue + change)

    if (change !== 0) {
      stat.textContent = newValue

      // Add animation
      stat.style.transform = "scale(1.1)"
      stat.style.color = change > 0 ? "var(--success)" : "var(--error)"

      setTimeout(() => {
        stat.style.transform = "scale(1)"
        stat.style.color = ""
      }, 500)
    }
  })
}

function addRandomNotification() {
  const notifications = [
    { icon: "eye", text: "Your profile was viewed by a scout", type: "primary" },
    { icon: "comments", text: "New message from Hawks FC", type: "success" },
    { icon: "file-alt", text: "Application status updated", type: "info" },
    { icon: "heart", text: "New scout showed interest", type: "error" },
  ]

  const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]

  // Update notification count
  const notificationCount = document.querySelector(".notification-count")
  if (notificationCount) {
    const currentCount = Number.parseInt(notificationCount.textContent) || 0
    notificationCount.textContent = currentCount + 1
    notificationCount.style.display = "block"
  }

  // Add to notification list
  const notificationList = document.querySelector(".notification-list")
  if (notificationList) {
    const notificationItem = document.createElement("div")
    notificationItem.className = "notification-item unread"
    notificationItem.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${randomNotification.icon} text-${randomNotification.type}"></i>
            </div>
            <div class="notification-content">
                <p>${randomNotification.text}</p>
                <span class="notification-time">Just now</span>
            </div>
        `

    notificationList.insertBefore(notificationItem, notificationList.firstChild)

    // Remove oldest notification if more than 5
    const items = notificationList.querySelectorAll(".notification-item")
    if (items.length > 5) {
      items[items.length - 1].remove()
    }
  }
}

// Tooltips
function initTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]")

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", showTooltip)
    element.addEventListener("mouseleave", hideTooltip)
  })
}

function showTooltip(e) {
  const text = e.target.getAttribute("data-tooltip")
  if (!text) return

  const tooltip = document.createElement("div")
  tooltip.className = "tooltip"
  tooltip.textContent = text
  tooltip.style.cssText = `
        position: absolute;
        background: var(--text-primary);
        color: white;
        padding: var(--space-sm) var(--space);
        border-radius: var(--radius);
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        white-space: nowrap;
    `

  document.body.appendChild(tooltip)

  const rect = e.target.getBoundingClientRect()
  tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
  tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px"

  setTimeout(() => (tooltip.style.opacity = "1"), 100)

  e.target._tooltip = tooltip
}

function hideTooltip(e) {
  const tooltip = e.target._tooltip
  if (tooltip) {
    tooltip.style.opacity = "0"
    setTimeout(() => tooltip.remove(), 200)
    delete e.target._tooltip
  }
}

// Authentication check
function checkAuthentication() {
  const userSession = localStorage.getItem("userSession") || sessionStorage.getItem("userSession")

  if (!userSession) {
    // Redirect to login if not authenticated
    window.location.href = "login.html"
    return
  }

  try {
    const userData = JSON.parse(userSession)
    updateUserInfo(userData)
  } catch (e) {
    console.error("Invalid session data")
    logout()
  }
}

function updateUserInfo(userData) {
  // Update user name and email in the UI
  const userNameElements = document.querySelectorAll(".user-name")
  const userEmailElements = document.querySelectorAll(".user-email")

  userNameElements.forEach((el) => {
    if (userData.firstName && userData.lastName) {
      el.textContent = `${userData.firstName} ${userData.lastName}`
    } else if (userData.email) {
      el.textContent = userData.email.split("@")[0]
    }
  })

  userEmailElements.forEach((el) => {
    if (userData.email) {
      el.textContent = userData.email
    }
  })
}

// Logout functionality
function logout() {
  // Clear session data
  localStorage.removeItem("userSession")
  sessionStorage.removeItem("userSession")

  // Clear auto-saved form data
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("autosave_")) {
      localStorage.removeItem(key)
    }
  })

  // Redirect to login
  window.location.href = "login.html"
}

// Opportunity functions
function applyToOpportunity(opportunityId) {
  const button = event.target
  const originalText = button.innerHTML

  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Applying...'
  button.disabled = true

  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-check"></i> Applied'
    button.classList.remove("btn-primary")
    button.classList.add("btn-success")

    showNotification("Application submitted successfully!", "success")

    // Reset after 3 seconds
    setTimeout(() => {
      button.innerHTML = originalText
      button.classList.remove("btn-success")
      button.classList.add("btn-primary")
      button.disabled = false
    }, 3000)
  }, 2000)
}

function viewOpportunity(opportunityId) {
  showNotification("Opening opportunity details...", "info")
  // In a real app, this would navigate to opportunity details page
}

// Player search functions (for scout dashboard)
function viewPlayer(playerId) {
  showNotification("Opening player profile...", "info")
  // In a real app, this would navigate to player profile page
}

function contactPlayer(playerId) {
  showNotification("Opening message composer...", "info")
  // In a real app, this would open messaging interface
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: var(--space-lg);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  const iconMap = {
    success: "check-circle",
    error: "times-circle",
    warning: "exclamation-triangle",
    info: "info-circle",
  }

  const colorMap = {
    success: "var(--success)",
    error: "var(--error)",
    warning: "var(--warning)",
    info: "var(--info)",
  }

  notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: var(--space);">
            <i class="fas fa-${iconMap[type]}" style="color: ${colorMap[type]}; font-size: 1.25rem; margin-top: 2px;"></i>
            <div style="flex: 1;">
                <div style="font-weight: 500; margin-bottom: 4px; color: var(--text-primary);">
                    ${type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">
                    ${message}
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `

  document.body.appendChild(notification)

  // Trigger animation
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 300)
  }, 5000)
}

// Form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      showFieldError(field, "This field is required")
      isValid = false
    } else {
      clearFieldError(field)
    }
  })

  return isValid
}

function showFieldError(field, message) {
  clearFieldError(field)

  field.style.borderColor = "var(--error)"

  const errorEl = document.createElement("div")
  errorEl.className = "field-error"
  errorEl.style.cssText = `
        color: var(--error);
        font-size: 0.75rem;
        margin-top: 4px;
    `
  errorEl.textContent = message

  field.parentNode.insertBefore(errorEl, field.nextSibling)
}

function clearFieldError(field) {
  field.style.borderColor = ""

  const errorEl = field.parentNode.querySelector(".field-error")
  if (errorEl) {
    errorEl.remove()
  }
}

// Export functions for global use
window.logout = logout
window.toggleNotifications = toggleNotifications
window.markAllRead = markAllRead
window.applyToOpportunity = applyToOpportunity
window.viewOpportunity = viewOpportunity
window.viewPlayer = viewPlayer
window.contactPlayer = contactPlayer
window.showNotification = showNotification
