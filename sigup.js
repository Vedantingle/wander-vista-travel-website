document.addEventListener("alpine:init", () => {
  Alpine.data("loginForm", () => ({
    email: "",
    password: "",
    passwordVisible: false,

    // Toggle password visibility
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    // Handle login
    async handleLogin() {
      if (!this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const response = await fetch("sigup.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email: this.email, password: this.password }),
        });

        const result = await response.json();

        if (result.status === "success") {
          alert(result.message);
          window.location.href = "index.html"; // Redirect to homepage after login
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again.");
      }
    },
  }));
});
