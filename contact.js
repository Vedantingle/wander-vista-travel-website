
// Add event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // You can add any additional initialization code here
  console.log("Contact page loaded");

  // Add keyboard navigation for modal
  document.addEventListener("keydown", function (e) {
    // Close modal on Escape key
    if (e.key === "Escape") {
      const alpine = document.querySelector("body").__x;
      if (alpine && alpine.$data.showSuccessModal) {
        alpine.$data.showSuccessModal = false;
      }
    }
  });
});
