// Main JavaScript for Landing Page

document.addEventListener("DOMContentLoaded", () => {
  initializeLandingPage()
})

function initializeLandingPage() {
  // Initialize navigation
  initNavigation()

  // Initialize smooth scrolling
  initSmoothScrolling()

  // Initialize contact form
  initContactForm()

  // Initialize animations
  initAnimations()

  console.log("Landing page initialized")
}

// Navigation functionality
function initNavigation() {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close menu when clicking on links
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "var(--shadow-sm)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  })
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(this)
      const submitButton = this.querySelector('button[type="submit"]')

      // Show loading state
      const originalText = submitButton.innerHTML
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitButton.disabled = true

      // Simulate form submission
      setTimeout(() => {
        // Reset button
        submitButton.innerHTML = originalText
        submitButton.disabled = false

        // Show success message
        showNotification("Message sent successfully! We'll get back to you soon.", "success")

        // Reset form
        this.reset()
      }, 2000)
    })
  }
}

// Initialize animations
function initAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".feature-card, .stat-item, .about-text, .contact-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Counter animation for stats
  animateCounters()
}

// Animate counter numbers
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
          const duration = 2000
          const step = target / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(timer)
            }

            // Format number with + if it's in the original text
            const originalText = counter.textContent
            const hasPlus = originalText.includes("+")
            counter.textContent = Math.floor(current) + (hasPlus ? "+" : "")
          }, 16)

          observer.unobserve(counter)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => observer.observe(counter))
}

// Notification system
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

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Recalculate any layout-dependent features
    console.log("Window resized")
  }, 250),
)
