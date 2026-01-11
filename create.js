document.addEventListener("alpine:init", () => {
  Alpine.data("registrationForm", () => ({
    step: 1,
    passwordVisible: false,
    confirmPasswordVisible: false,
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      country: "",
      interests: [],
    },

    validateStep1() {
      if (this.formData.firstName && this.formData.lastName && this.formData.email) {
        this.step = 2;
      } else {
        const missingFields = [];
        if (!this.formData.firstName) missingFields.push("First Name");
        if (!this.formData.lastName) missingFields.push("Last Name");
        if (!this.formData.email) missingFields.push("Email");

        alert(`Please fill in the following required fields: ${missingFields.join(", ")}`);
      }
    },

    validateStep2() {
      if (this.formData.password && this.formData.confirmPassword) {
        if (this.formData.password === this.formData.confirmPassword) {
          this.step = 3;
        } else {
          alert("Passwords do not match. Please try again.");
        }
      } else {
        alert("Please fill in both password fields.");
      }
    },

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    toggleConfirmPasswordVisibility() {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    },

    async submitForm() {
      const formData = new FormData();
      formData.append("firstName", this.formData.firstName);
      formData.append("lastName", this.formData.lastName);
      formData.append("email", this.formData.email);
      formData.append("password", this.formData.password);
      formData.append("phone", this.formData.phone);
      formData.append("country", this.formData.country);
      formData.append("interests", JSON.stringify(this.formData.interests));

      try {
        const response = await fetch("create.php", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        alert(result.message);

        if (result.success) {
          window.location.href = "sigup.html"; // Redirect to Sign-Up page
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Registration failed. Please try again.");
      }
    },
  }));
});
