<template>
    <div class="container">
      <h1 class="about">Forgot Password</h1>
  
      <div id="form" class="container-fluid">
        <form @submit.prevent="submitForgot">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              placeholder="johndoe23@gmail.com"
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
          console.log("Sending forgot-password request for:", this.email);
  
          // 1️⃣ Send request to backend
          const res = await fetch(
            "https://capstone-phantomrealm-backend.onrender.com/users/forgot-password",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: this.email }),
            }
          );
  
          console.log("Backend response status:", res.status);
  
          const data = await res.json();
          console.log("Backend response data:", data);
  
          if (data.msg === "Email not found") {
            swal("Error", "Email not found");
            return;
          }
  
          // 2️⃣ Send email via Formspree
          const formspreeRes = await fetch("https://formspree.io/f/mkneonwq", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: this.email,
              message: `Click this link to reset your password: ${data.resetLink}`,
            }),
          });
  
          console.log("Formspree response:", formspreeRes.status);
  
          swal(
            "Success",
            "Password reset link sent to your email! Check spam folder if you don't see it."
          );
        } catch (err) {
          console.error("Forgot password error:", err);
          swal("Error", "Network or server error. Check console.");
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
    height: 45vh;
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