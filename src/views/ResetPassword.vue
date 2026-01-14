<template>
    <div class="container">
      <h1 class="about">Reset Password</h1>
  
      <div id="form" class="container-fluid">
        <form @submit.prevent="submitReset">
          <div class="mb-3">
            <label for="password" class="form-label">New Password</label>
            <input
              type="password"
              v-model="newPassword"
              class="form-control"
              id="password"
              placeholder="New password"
              required
            />
          </div>
  
          <div class="mb-3">
            <label for="confirm" class="form-label">Confirm Password</label>
            <input
              type="password"
              v-model="confirmPassword"
              class="form-control"
              id="confirm"
              placeholder="Confirm password"
              required
            />
          </div>
  
          <button type="submit" class="btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import swal from "sweetalert";
  
  export default {
    mounted() {
      window.scrollTo(0, 0);
    },
    data() {
      return {
        newPassword: "",
        confirmPassword: "",
      };
    },
    methods: {
      submitReset() {
        // Check passwords match
        if (this.newPassword !== this.confirmPassword) {
          swal("Error", "Passwords do not match");
          return;
        }
  
        // Get token from query params
        const token = this.$route.query.token;
        if (!token) {
          swal("Error", "Invalid or missing reset token");
          return;
        }
  
        // Call Vuex action to reset password
        this.$store.dispatch("resetPassword", {
          token: token,
          newPassword: this.newPassword,
        })
        .then(() => {
          // Clear form
          this.newPassword = "";
          this.confirmPassword = "";
        });
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
  