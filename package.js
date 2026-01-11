document.addEventListener("DOMContentLoaded", function () {
    // State management
    const state = {
      activeCategory: "all",
      priceRange: 10000,
      showDetails: false,
      isBookingModalOpen: false,
      selectedPackage: null,
      packages: {
        culture: [
          {
            id: 1,
            name: "Japanese Heritage Tour",
            price: 5200,
            duration: "8 days",
            location: "Japan",
            image: "pa1.jpg",
            description: "Immerse yourself in ancient Japanese traditions",
            fullDescription:
              "Experience the perfect blend of ancient and modern Japan with exclusive access to traditional ceremonies, historic temples, and cultural workshops.",
            includes: [
              "Luxury ryokan stays",
              "Private tea ceremonies",
              "Zen garden tours",
              "Cultural workshops",
              "Gourmet Japanese cuisine",
            ],
            highlights: [
              "Private geisha experience",
              "Ancient temple stay",
              "Traditional art classes",
            ],
            itinerary: [
              "Day 1: Tokyo arrival",
              "Day 2: Historic temples",
              "Day 3: Tea ceremony",
              "Day 4: Kyoto exploration",
              "Day 5: Cultural workshops",
              "Day 6: Garden tours",
              "Day 7: Free day",
              "Day 8: Departure",
            ],
          },
          {
            id: 2,
            name: "Tuscan Cultural Journey",
            price: 4800,
            duration: "7 days",
            location: "Italy",
            image: "pa2.jpg",
            description: "Discover the heart of Italian culture",
            fullDescription:
              "Explore the rich cultural heritage of Tuscany through its art, wine, and cuisine.",
            includes: [
              "Historic villa accommodation",
              "Wine tastings",
              "Cooking classes",
              "Art tours",
              "Local experiences",
            ],
            highlights: [
              "Private museum tours",
              "Vineyard visits",
              "Authentic cooking lessons",
            ],
            itinerary: [
              "Day 1: Florence arrival",
              "Day 2: Art tours",
              "Day 3: Wine country",
              "Day 4: Cooking class",
              "Day 5: Siena visit",
              "Day 6: Local crafts",
              "Day 7: Departure",
            ],
          },
        ],
        beach: [
          {
            id: 3,
            name: "Maldives Luxury Escape",
            price: 7500,
            duration: "6 days",
            location: "Maldives",
            image: "pa3.jpg",
            description: "Ultimate private island experience",
            fullDescription:
              "Indulge in absolute luxury with your private overwater villa in the Maldives.",
            includes: [
              "Overwater villa",
              "Private butler",
              "Spa treatments",
              "Water activities",
              "Gourmet dining",
            ],
            highlights: [
              "Private beach dinners",
              "Underwater restaurant",
              "Sunset cruises",
            ],
            itinerary: [
              "Day 1: Island welcome",
              "Day 2: Ocean activities",
              "Day 3: Spa day",
              "Day 4: Island hopping",
              "Day 5: Marine life",
              "Day 6: Departure",
            ],
          },
          {
            id: 4,
            name: "Seychelles Paradise",
            price: 6800,
            duration: "7 days",
            location: "Seychelles",
            image: "pa4.jpg",
            description: "Exclusive beach retreat experience",
            fullDescription:
              "Experience the pristine beaches and luxury of the Seychelles.",
            includes: [
              "Beachfront villa",
              "Private beach access",
              "Island tours",
              "Water sports",
              "Luxury dining",
            ],
            highlights: [
              "Private island visits",
              "Yacht excursions",
              "Beach dining",
            ],
            itinerary: [
              "Day 1: Arrival",
              "Day 2: Beach day",
              "Day 3: Island tour",
              "Day 4: Water sports",
              "Day 5: Relaxation",
              "Day 6: Yacht trip",
              "Day 7: Departure",
            ],
          },
        ],
        mountains: [
          {
            id: 5,
            name: "Swiss Alps Luxury",
            price: 6200,
            duration: "7 days",
            location: "Switzerland",
            image: "pa5.jpg",
            description: "Premium mountain retreat experience",
            fullDescription:
              "Luxury mountain experience with premium skiing and spectacular views.",
            includes: [
              "Luxury chalet",
              "Private ski instructor",
              "Mountain activities",
              "Spa access",
              "Gourmet dining",
            ],
            highlights: [
              "Helicopter tours",
              "Private ski slopes",
              "Mountain dining",
            ],
            itinerary: [
              "Day 1: Arrival",
              "Day 2: Ski lessons",
              "Day 3: Mountain tour",
              "Day 4: Spa day",
              "Day 5: Activities",
              "Day 6: Free day",
              "Day 7: Departure",
            ],
          },
          {
            id: 6,
            name: "Canadian Rockies",
            price: 5800,
            duration: "8 days",
            location: "Canada",
            image: "pa6.jpg",
            description: "Majestic mountain adventure",
            fullDescription:
              "Experience the grandeur of the Canadian Rockies in luxury.",
            includes: [
              "Lodge accommodation",
              "Guided tours",
              "Wildlife viewing",
              "Adventure activities",
              "Local cuisine",
            ],
            highlights: ["Glacier walks", "Wildlife safaris", "Mountain lakes"],
            itinerary: [
              "Day 1: Arrival",
              "Day 2: Banff tour",
              "Day 3: Lake Louise",
              "Day 4: Glacier walk",
              "Day 5: Wildlife",
              "Day 6: Jasper",
              "Day 7: Activities",
              "Day 8: Departure",
            ],
          },
        ],
        nature: [
          {
            id: 7,
            name: "Amazon Luxury Explorer",
            price: 5500,
            duration: "6 days",
            location: "Brazil",
            image: "pa7.jpg",
            description: "Luxury rainforest adventure",
            fullDescription:
              "Explore the Amazon in comfort with luxury eco-lodge accommodation.",
            includes: [
              "Eco-luxury lodge",
              "Private guide",
              "River cruises",
              "Wildlife tours",
              "Indigenous visits",
            ],
            highlights: ["Night safaris", "Canopy walks", "River exploration"],
            itinerary: [
              "Day 1: Arrival",
              "Day 2: Rainforest",
              "Day 3: River cruise",
              "Day 4: Wildlife",
              "Day 5: Culture",
              "Day 6: Departure",
            ],
          },
          {
            id: 8,
            name: "African Safari Deluxe",
            price: 8500,
            duration: "8 days",
            location: "Tanzania",
            image: "pa8.jpg",
            description: "Premium wildlife safari experience",
            fullDescription:
              "Luxury safari experience with private game drives and exclusive camps.",
            includes: [
              "Luxury tented camps",
              "Private game drives",
              "Bush dining",
              "Scenic flights",
              "Cultural visits",
            ],
            highlights: ["Big Five viewing", "Hot air balloon", "Masai village"],
            itinerary: [
              "Day 1: Arrival",
              "Day 2-3: Serengeti",
              "Day 4: Ngorongoro",
              "Day 5: Lake Manyara",
              "Day 6-7: Tarangire",
              "Day 8: Departure",
            ],
          },
        ],
      },
    };
  
    // DOM Elements
    const packageContainer = document.getElementById("packages-container");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const priceRangeSlider = document.getElementById("price-range");
    const currentPriceDisplay = document.querySelector(".current-price");
    const detailsModal = document.getElementById("details-modal");
    const bookingModal = document.getElementById("booking-modal");
    const bookingForm = document.getElementById("booking-form");
    const travelDateInput = document.getElementById("travel-date");
  
    // Set min date for travel date input to today
    const today = new Date().toISOString().split("T")[0];
    travelDateInput.setAttribute("min", today);
  
    // Initialize the page
    renderPackages();
    setupEventListeners();
  
    // Functions
    function renderPackages() {
      packageContainer.innerHTML = "";
  
      // Get filtered packages
      const filteredPackages = getFilteredPackages();
  
      if (filteredPackages.length === 0) {
        packageContainer.innerHTML = `
          <div class="no-packages">
            <p>No packages match your current filters. Try adjusting your criteria.</p>
          </div>
        `;
        return;
      }
  
      // Render each package
      filteredPackages.forEach((pkg) => {
        const packageCard = createPackageCard(pkg);
        packageContainer.appendChild(packageCard);
      });
    }
  
    function getFilteredPackages() {
      let filtered = [];
  
      // Filter by category
      if (state.activeCategory === "all") {
        Object.values(state.packages).forEach((categoryPackages) => {
          filtered = filtered.concat(categoryPackages);
        });
      } else if (state.packages[state.activeCategory]) {
        filtered = state.packages[state.activeCategory];
      }
  
      // Filter by price
      filtered = filtered.filter((pkg) => pkg.price <= state.priceRange);
  
      // Sort by price (low to high)
      filtered.sort((a, b) => a.price - b.price);
  
      return filtered;
    }
  
    function createPackageCard(pkg) {
      const card = document.createElement("article");
      card.className = "package-card";
      card.setAttribute("aria-labelledby", `package-title-${pkg.id}`);
  
      card.innerHTML = `
        <img src="${pkg.image}" alt="${pkg.name}" class="card-image">
        <div class="card-content">
          <h2 id="package-title-${pkg.id}" class="card-title">${pkg.name}</h2>
          <p class="card-description">${pkg.description}</p>
          <div class="card-meta">
            <span class="card-price">$${pkg.price}</span>
            <span class="card-duration">${pkg.duration}</span>
          </div>
          <div class="card-actions">
            <button class="view-btn" data-id="${pkg.id}" aria-label="View details for ${pkg.name}">View Details</button>
            <button class="book-btn" data-id="${pkg.id}" aria-label="Book ${pkg.name}">Book Now</button>
          </div>
        </div>
      `;
  
      return card;
    }
  
    function setupEventListeners() {
      // Category filter buttons
      categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
          categoryButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");
          state.activeCategory = button.dataset.category;
          renderPackages();
        });
      });
  
      // Price range slider
      priceRangeSlider.addEventListener("input", (e) => {
        state.priceRange = parseInt(e.target.value);
        currentPriceDisplay.textContent = `$${state.priceRange.toLocaleString()}`;
        priceRangeSlider.setAttribute("aria-valuenow", state.priceRange);
        renderPackages();
      });
  
      // Package container event delegation for view and book buttons
      packageContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-btn")) {
          const packageId = parseInt(e.target.dataset.id);
          showPackageDetails(findPackageById(packageId));
        } else if (e.target.classList.contains("book-btn")) {
          const packageId = parseInt(e.target.dataset.id);
          showBookingForm(findPackageById(packageId));
        }
      });
  
      // Close buttons for modals
      document.querySelectorAll(".close-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          closeAllModals();
        });
      });
  
      // Close modals when clicking outside content
      document.querySelectorAll(".modal-overlay").forEach((modal) => {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closeAllModals();
          }
        });
      });
  
      // Booking form submission
      bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Booking submitted successfully!");
        closeAllModals();
      });
  
      // Keyboard accessibility
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeAllModals();
        }
      });
    }
  
    function findPackageById(id) {
      let foundPackage = null;
  
      Object.values(state.packages).forEach((categoryPackages) => {
        const found = categoryPackages.find((pkg) => pkg.id === id);
        if (found) {
          foundPackage = found;
        }
      });
  
      return foundPackage;
    }
  
    function showPackageDetails(pkg) {
      if (!pkg) return;
  
      state.selectedPackage = pkg;
      state.showDetails = true;
  
      // Update modal content
      document.getElementById("modal-title").textContent = pkg.name;
      const packageImage = detailsModal.querySelector(".package-image");
      packageImage.src = pkg.image;
      packageImage.alt = pkg.name;
  
      detailsModal.querySelector(".package-description").textContent =
        pkg.fullDescription;
      detailsModal.querySelector(".package-price").textContent = `$${pkg.price}`;
      detailsModal.querySelector(".package-duration").textContent = pkg.duration;
  
      // Includes list
      const includesList = detailsModal.querySelector(".includes-list");
      includesList.innerHTML = "";
      pkg.includes.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        includesList.appendChild(li);
      });
  
      // Itinerary
      const itineraryGrid = detailsModal.querySelector(".itinerary-grid");
      itineraryGrid.innerHTML = "";
      pkg.itinerary.forEach((day) => {
        const dayEl = document.createElement("div");
        dayEl.className = "itinerary-day";
        dayEl.textContent = day;
        itineraryGrid.appendChild(dayEl);
      });
  
      // Show modal
      detailsModal.setAttribute("aria-hidden", "false");
      detailsModal.classList.add("active");
  
      // Focus management
      setTimeout(() => {
        detailsModal.querySelector(".close-btn").focus();
      }, 100);
  
      // Trap focus in modal
      trapFocus(detailsModal);
    }
  
    function showBookingForm(pkg) {
      if (!pkg) return;
  
      state.selectedPackage = pkg;
      state.isBookingModalOpen = true;
  
      // Update booking form
      document.getElementById("booking-title").innerHTML =
        `Book <span id="booking-package-name">${pkg.name}</span>`;
  
      // Show modal
      bookingModal.setAttribute("aria-hidden", "false");
      bookingModal.classList.add("active");
  
      // Focus management
      setTimeout(() => {
        document.getElementById("travel-date").focus();
      }, 100);
  
      // Trap focus in modal
      trapFocus(bookingModal);
    }
  
    function closeAllModals() {
      // Hide all modals
      document.querySelectorAll(".modal-overlay").forEach((modal) => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      });
  
      state.showDetails = false;
      state.isBookingModalOpen = false;
    }
  
    function trapFocus(element) {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
  
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
  
      element.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
          // Shift + Tab
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            }
            // Tab
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        }
      });
    }
  
    // Format currency helper
    function formatCurrency(amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(amount);
    }
  });
  