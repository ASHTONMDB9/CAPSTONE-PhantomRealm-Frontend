<template>
  <nav id="nav" class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/Images/nav.png" alt="Logo" height="50" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Store">Store</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Cart">Cart</router-link>
          </li>
        </ul>

        <ul class="navbar-nav align-items-lg-center">
          <template v-if="user">
            <li class="nav-item" v-if="user">
              <router-link class="nav-link admin-link" to="/Admin">
                Admin
              </router-link>
            </li>

            <li v-for="user in user" :key="user.id" class="nav-item-user">
              {{ user.full_name }}
            </li>

            <li class="nav-item">
              <button @click="Logout" class="btn nav-link" id="signup">Logout</button>
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link to="/SignUp" class="btn nav-link" id="signup">
                Sign Up
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Login" class="btn nav-link" id="login">
                Log in
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", changeBackground);

    function changeBackground() {
      let navbar = document.getElementById("nav");
      let scrollValue = window.scrollY;
      if (scrollValue < 50) {
        navbar.style.background = "transparent";
        navbar.style.transition = "all 0.5s linear";
      } else {
        navbar.style.background = "black";
      }
    }
  },
  computed: {
    user() {
      // console.log(this.$store.state.user)
      return this.$store.state.user;
    },
  },

  methods: {
    Logout() {
      this.$store.commit("Logout");
      localStorage.removeItem("vuex");
      this.$router.push("/Login");
    },
  },
};
</script>

<style>
/*Navbar*/
.navbar {
  height: 65px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: background 0.4s ease;
}
.nav-item {
  font-size: 25px;
  margin: 0 6px;
  font-family: detail;
}
.nav-item-user {
  color: white;
  font-family: phantom;
  font-size: 16px;
  margin: 0 5px;
}
.nav-link {
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: red;
}
.navbar a.router-link-exact-active {
  color: red;
  text-decoration: line-through;
  text-decoration-thickness: 2px;
}
.btn {
  background-color: transparent;
  border: 2px solid red;
  width: 150px;
  font-size: 20px;
  font-family: detail;
  color: white;
}
.btn:hover {
  background-color: red;
  border: 2px solid red;
  color: white;
}
.admin-link {
  opacity: 0;
}
.admin-link:hover {
  opacity: 1;
}

/* Mobile tweaks */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }

  .btn {
    margin-top: 8px;
    width: 100%;
  }
}
</style>
