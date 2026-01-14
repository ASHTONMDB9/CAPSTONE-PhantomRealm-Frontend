<template>
    <div class="container">
      <h1 class="about">Forgot Password</h1>
  
      <div id="form" class="container-fluid">
        <form @submit.prevent="submitForgot">
          <div class="mb-3">
            <label for="email" class="form-label">Enter your email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
  
          <button type="submit" class="btn">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import swal from "sweetalert";
  
  export default {
    data() {
      return {
        email: "",
      };
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      async submitForgot() {
        if (!this.email) {
          swal("Error", "Please enter your email");
          return;
        }
  
        try {
          // Call backend to generate reset token & link
          const res = await fetch(
            "https://capstone-phantomrealm-backend.onrender.com/users/forgot-password",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: this.email }),
            }
          );
  
          const data = await res.json();
  
          if (data.msg === "Email not found") {
            swal("Error", "Email not found");
            return;
          }
  
          // Send email via Formspree
          const formData = {
            email: this.email,
            message: `Click this link to reset your password: ${data.resetLink}`,
          };
  
          await fetch("https://formspree.io/f/mkneonwq", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
  
          swal(
            "Success",
            "Password reset link sent to your email! This link will expire in 15 minutes."
          );
  
          // Clear the form
          this.email = "";
        } catch (error) {
          console.error(error);
          swal("Error", "Something went wrong. Please try again.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding-top: 165px;
  }
  
  .about {
    color: black;
    text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
      10px 0px 10px rgb(36, 36, 36);
    font-family: phantom;
    font-size: 80px;
  }
  
  #form {
    background-color: red;
    background-image: url(../assets/Images/REDBLA_1.jpg);
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 55vh;
    align-items: center;
  }
  
  .form-label {
    filter: drop-shadow(0px 0px 0.2rem white);
    color: white;
  }
  
  button {
    width: 100%;
    margin-top: 10px;
    height: 50px;
    background-color: transparent;
    border: 3px solid red;
    color: white;
    border-radius: 5px;
    text-shadow: 0 0 4px white, 0 0 4px white,
      0 0 4px white, 10px 0px 10px rgb(36, 36, 36);
  }
  </style>
  