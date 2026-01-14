import { createStore } from 'vuex'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
import swal from 'sweetalert';
export default createStore({
  state: {
    user: null,
    Token: null,
    user_type: null,
    Product: null,
    cart: [],
    order: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user  ;
    },
    setToken: (state, token) => {
      state.Token = token  ;
    },
    setProduct: (state, product) => {
      state.Product = product
    },
    setCart: (state, cart) => {
      state.cart = cart;
    },
    updateCart: (state, product) => {

      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    setOrder: (state, order) => {
      state.order = order;
    },
    Logout(state) {
      (state.user = ""), (state.Token = "")
    }
  },
  actions: {
        // Add new product
        addProduct: async (context, product) => {
          fetch("https://capstone-phantomrealm-backend.onrender.com/products/add_product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => {
              console.log(data);
              context.dispatch("getProduct");
            });
            
        },
        // new order
        addOrder: async (context, order) => {
          fetch("https://capstone-phantomrealm-backend.onrender.com/orders/add_order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => context.dispatch("getOrder"));

            router.push("/Store");
        },
     // Login
     login: async (context, payload) => {
      let res = await fetch(
        "https://capstone-phantomrealm-backend.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
        context.commit("setToken", data.token);
        if(data.msg === "Password incorrect"){
          swal("Error","Incorrect Password"); 
      } else if(data.msg === "Email not found please register") {
          swal("Error", "Email not found please register");
      } else{
        // Verify token
        //
        fetch("https://capstone-phantomrealm-backend.onrender.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);

            router.push("/Store");
          });
        }
    },

//Forgot Password
forgotPassword: async (context, payload) => {
  const res = await fetch(
    "https://capstone-phantomrealm-backend.onrender.com/users/forgot-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: payload.email }),
    }
  );
  const data = await res.json();

  if (data.msg === "Email not found") {
    swal("Error", "Email not found");
    return;
  }

  // Now send the email via Formspree
  await fetch("https://formspree.io/f/mkneonwq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: payload.email,
      message: `Click this link to reset your password: ${data.resetLink}`,
    }),
  });

  swal("Password reset link sent to your email!", "This link will expire in 15 mins.");
},
    
    // Reset Password
    resetPassword: async (context, payload) => {
      fetch("https://capstone-phantomrealm-backend.onrender.com/users/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: payload.token,
          newPassword: payload.newPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === "Password reset successfully") {
            swal("Success", "Password updated successfully");
            router.push("/login");
          } else {
            swal("Error", data.msg);
          }
        });
    },
    

    // Sign Up
    signUp: async (context, payload) => {
      fetch("https://capstone-phantomrealm-backend.onrender.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            phone_number: payload.phone_number,
            user_type: "User",
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));

        },
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
          context.dispatch("updateCart", this.state.cart);
        },
    deleteFromCart: async (context, id) => {
          const newCart = context.state.cart.filter((product) => product.id != id);
          context.commit("removeFromCart", newCart);
        },
    deleteProduct: async (context, payload) => {
          const res  = await fetch("https://capstone-phantomrealm-backend.onrender.com/products/delete_product/" + payload.id,{
          method:"DELETE",
          headers:{
            "Content-type": "application/json",
            "x-auth-token": payload.token,
          },
        })
        .then(res => res.json())
        .then(del =>{
          console.log(del);
        })          
        },
        UpdateProduct: async (context, payload) => {
         const res = await fetch("https://capstone-phantomrealm-backend.onrender.com/products/update_product/" + payload.id,{
          method:"PUT",
          body:JSON.stringify({
            title:payload.title,
            description:payload.description,
            category:payload.category,
            image:payload.image,
            price:payload.price,
          }),
          headers:{
            "Content-type": "application/json",
            "x-auth-token": payload.token,
          },
         })
         .then(res => res.json())
         .then(product =>{
          console.log(product);
         })
        }
  },
  modules: {},
  plugins: [createPersistedState()],
});

  





