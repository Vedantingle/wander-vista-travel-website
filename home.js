// Wander Vista Alpine.js Application
document.addEventListener("alpine:init", () => {
    Alpine.data("wanderVistaApp", () => ({
      // State variables
      showLoginModal: false,
      showSignupModal: false,
      currentSlide: 0,
  
      // Destination data
      destinations: [
        {
          img: "https://placehold.co/800x500",
          title: "Luxury Destinations",
          desc: "Experience world-class accommodations and service",
        },
        {
          img: "https://placehold.co/800x500",
          title: "Historic Journeys",
          desc: "Explore timeless landmarks and ancient wonders",
        },
        {
          img: "https://placehold.co/800x500",
          title: "Scenic Escapes",
          desc: "Discover breathtaking natural landscapes",
        },
      ],
  
      nextSlide() {
        this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
      },
  
      prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
      },
  
      // Lifecycle hooks
      init() {
      },
    }));
  });
  