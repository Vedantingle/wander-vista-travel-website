// Tailwind configuration
tailwind.config = {
    theme: {
      extend: {
        colors: {
          navy: "#1B2B4B",
          gold: "#D4AF37",
          lightGray: "#F5F5F5",
          darkGray: "#666666",
          borderGray: "#E5E5E5",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        boxShadow: {
          custom: "0 4px 20px rgba(0,0,0,0.08)",
          hero: "0 4px 30px rgba(0,0,0,0.2)",
        },
      },
    },
  };
  
  // Add smooth scrolling for anchor links
  document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    for (let anchor of anchorLinks) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: "smooth",
          });
        }
      });
    }
  });
  