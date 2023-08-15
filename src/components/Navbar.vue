<template>
    <nav id="nav" class="navbar navbar-dark navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="../assets/Images/nav.png">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Toggler" aria-controls="Toggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="Toggler">
      <ul class="navbar-nav mb-1 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Store">Store</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Cart">Cart</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </li>
        <ul v-if="user" class="navbar-nav mb-lg-0">
        <li class="nav-item " id="ad">
          <router-link class="nav-link" to="/Admin">Admin</router-link>
        </li>
          <li class="nav-item">
          <a  @click="Logout" class="btn" id="signup">Logout</a>
          </li>
          <div v-for="user in user" v-bind:key="user.id" class="item">
          <h6 class="text-light">{{user.full_name}}</h6>
          </div>
        </ul>
        <ul v-else class="navbar-nav mb-1 mb-lg-0">
         <li class="nav-item">
           <router-link to="/SignUp" class="btn" id="signup">Sign Up</router-link>
         </li>
         <li class="nav-item">
           <router-link to="/Login" class="btn" id="signup">Log in</router-link>
         </li>
      </ul>
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
    window.addEventListener('scroll',changeBackground);

function changeBackground(){
  let navbar = document.getElementById("nav");
  let scrollValue = window.scrollY;
  if(scrollValue <50){
    navbar.style.background = "transparent";
    navbar.style.transition = "all 0.5s linear"

    
}else{
    navbar.style.background = "black";
}
}
  },
  computed:{
    user() {
      // console.log(this.$store.state.user)
      return this.$store.state.user;
    },

    },
  
  methods: {
    Logout(){
      this.$store.commit("Logout");
      this.$router.push("/Login");
    }}
};
</script>

<style>
/*Navbar*/
.navbar {
  height: 95px;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.navbar-nav {
display: flex;
flex-direction: column;
justify-content: center;
transition: smooth;
align-items: center;
}
.navbar-nav li {
  justify-content: center;
}
.nav-item {
  font-size: 20px;
}
#ad {
  display: none;
}
#ad:hover {
  display: inline;
}
.nav-link:hover {
  color: red;
}
.navbar a.router-link-exact-active {
  color: red;
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: red;
}
.btn {
  background: transparent;
  border: 3px solid red;
  color: red;
  margin-right: 5px;
  font-size: 15px;
}
@media only screen and (max-width: 510px) {
  .navbar-brand {
    width: 1px;
  };
}
</style>