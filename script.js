// VPS Hosting Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Toggle hamburger icon
      const hamburgerIcon = mobileMenuToggle.querySelector(".hamburger-icon");
      if (hamburgerIcon) {
        const isActive = navMenu.classList.contains("active");
        hamburgerIcon.innerHTML = isActive
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      navMenu &&
      !mobileMenuToggle.contains(event.target) &&
      !navMenu.contains(event.target)
    ) {
      navMenu.classList.remove("active");
      const hamburgerIcon = mobileMenuToggle.querySelector(".hamburger-icon");
      if (hamburgerIcon) {
        hamburgerIcon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu) {
        navMenu.classList.remove("active");
        const hamburgerIcon = mobileMenuToggle.querySelector(".hamburger-icon");
        if (hamburgerIcon) {
          hamburgerIcon.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      }
    });
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // FAQ accordion functionality (if needed in future)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.style.cursor = "pointer";
      question.addEventListener("click", function () {
        const answer = item.querySelector(".faq-answer");
        if (answer) {
          // Toggle visibility
          if (answer.style.display === "none") {
            answer.style.display = "block";
            question.classList.add("active");
          } else {
            answer.style.display = "none";
            question.classList.remove("active");
          }
        }
      });
    }
  });

  // Add loading animation to CTA buttons
  const ctaButtons = document.querySelectorAll(".hero-cta, .btn-primary");
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add visual feedback
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Animate elements on scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .testimonial-card, .faq-item, .recommendation-card",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Add hover effects for pricing table rows
  const tableRows = document.querySelectorAll(
    ".pricing-table tbody tr, .benefits-table tbody tr",
  );
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#F3F4F6";
      this.style.transform = "scale(1.01)";
      this.style.transition = "all 0.2s ease";
    });

    row.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "";
      this.style.transform = "";
    });
  });

  // Lazy loading for YouTube video
  const videoWrapper = document.querySelector(".video-wrapper iframe");
  if (videoWrapper) {
    const videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in view, enable autoplay if needed
          videoObserver.unobserve(entry.target);
        }
      });
    });
    videoObserver.observe(videoWrapper);
  }

  // Add ripple effect to buttons
  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    // Add ripple styles
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple-animation 0.6s linear";
    ripple.style.pointerEvents = "none";

    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Add ripple effect CSS
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  // Apply ripple effect to buttons
  const rippleButtons = document.querySelectorAll(".hero-cta, .btn-primary");
  rippleButtons.forEach((button) => {
    button.addEventListener("click", createRipple);
  });

  // Add scroll-to-top functionality
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--cosmic-blue);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(scrollToTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Track external link clicks (for analytics)
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // You can add analytics tracking here
      console.log("External link clicked:", this.href);
    });
  });

  // Add keyboard navigation support
  document.addEventListener("keydown", function (e) {
    // ESC key closes mobile menu
    if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });

  // Performance optimization: Throttle scroll events
  let ticking = false;
  function updateOnScroll() {
    // Add any scroll-based animations or effects here
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });

  console.log("VPS Hosting website loaded successfully");
});

// Utility functions
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Add error handling for failed external resources
window.addEventListener("error", function (e) {
  if (e.target !== window) {
    console.warn("Resource failed to load:", e.target.src || e.target.href);
  }
});
