import { createStore } from 'vuex'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
import swal from 'sweetalert';
export default createStore({
  state: {
    user: null,
    Token: null,
    user_type: null,
    product: [],
    cart: [],
    order: null,
  },
  getters: {
    cartCount(state) {
      return state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },

    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user  ;
    },
    setToken: (state, token) => {
      state.Token = token  ;
    },
    setProduct: (state, product) => {
      state.product = product
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
      (state.user = ""), (state.Token = ""), (state.cart = [])
    },
    AddtoCart(state, product) {
      const item = state.cart.find(p => p.id === product.id)
  
      if (item) {
        item.quantity++
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    RemoveFromCart(state, id) {
      state.cart = state.cart.filter(p => p.id !== id)
    },
    DecreaseQTY(state, id) {
      const item = state.cart.find(p => p.id === id)
      if (!item) return
  
      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.cart = state.cart.filter(p => p.id !== id)
      }
    },
    ClearCart(state) {
      state.cart = []
    }
  },
  actions: {
    // Get all products
    getProduct: async (context) => {
      try {
        let res = await fetch(
          "https://capstone-phantomrealm-backend.onrender.com/products"
        );
        let data = await res.json();
        context.commit("setProduct", data); // commit to Vuex
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    },

    // Add new product
    addProduct: async (context, product) => {
      try {
        let res = await fetch(
          "https://capstone-phantomrealm-backend.onrender.com/products/add_product",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
          }
        );

        let data = await res.json();
        console.log("Product added:", data);

        if (data.msg === "New product created") {
          swal("Added!", "Product added successfully");
          // Auto-refresh products
          context.dispatch("getProduct");
        } else {
          swal("Failed to add product", "error");
        }
      } catch (error) {
        console.error(error);
        swal("Something went wrong while adding the product", "error");
      }
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

    forgotPassword: async (context, payload) => {
      try {
        console.log("Vuex forgotPassword called with:", payload.email);
    
        // Generate token
        const res = await fetch(
          "https://capstone-phantomrealm-backend.onrender.com/users/forgot-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: payload.email }),
          }
        );
    
        const data = await res.json();
        console.log("Backend response:", data);
    
        if (data.msg === "Email not found") {
          swal("Error", "Email not found");
          return;
        }
    
        // Send reset link via Formspree
        const formData = new FormData();
        formData.append("email", payload.email);
        formData.append(
          "message",
          `Hello (name) Click this link to reset your password: ${data.resetLink}`
        );
    
        const formspreeRes = await fetch("https://formspree.io/f/mkneonwq", {
          method: "POST",
          body: formData,
        });
    
        if (!formspreeRes.ok) {
          console.error("Formspree failed:", formspreeRes.statusText);
          swal("Error", "Failed to send email. Try again.");
          return;
        }
    
        swal(
          "Password reset link sent to your email!"
        );
      } catch (err) {
        console.error("Forgot password Vuex error:", err);
        swal("Password reset link sent to your email!", "This link will expire in 15 mins.");
      }
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
        addToCart({ commit }, product) {
          commit("AddtoCart", product)
        },
      
        removeFromCart({ commit }, id) {
          commit("RemoveFromCart", id)
        },
      
        decreaseQty({ commit }, id) {
          commit("DecreaseQTY", id)
        },
      
        clearCart({ commit }) {
          commit("ClearCart")
        },
       // Delete product
    deleteProduct: async (context, payload) => {
      swal({
        title: "Are you sure?",
        text: "This product will be permanently deleted!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            let res = await fetch(
              "https://capstone-phantomrealm-backend.onrender.com/products/delete_product/" + payload.id,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": payload.token,
                },
              }
            );

            let data = await res.json();
            console.log(data);

            swal("Deleted!", "Product has been deleted.", "success");
            
            context.dispatch("getProduct");
          } catch (error) {
            console.error(error);
            swal("Error", "Failed to delete product", "error");
          }
        }
      });
    },
         // Update product
    UpdateProduct: async (context, payload) => {
      swal({
        title: "Update Product?",
        text: "Do you want to save these changes?",
        icon: "warning",
        buttons: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          try {
            let res = await fetch(
              "https://capstone-phantomrealm-backend.onrender.com/products/update_product/" + payload.id,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": payload.token,
                },
                body: JSON.stringify({
                  title: payload.title,
                  description: payload.description,
                  category: payload.category,
                  image: payload.image,
                  price: payload.price,
                }),
              }
            );

            let data = await res.json();
            console.log(data);

            swal("Updated!", "Product updated successfully.", "success");
            // Auto-refresh products
            context.dispatch("getProduct");
          } catch (error) {
            console.error(error);
            swal("Error", "Failed to update product", "error");
          }
        }
      });
    },
        
  },
  modules: {},
  plugins: [createPersistedState()],
});

  





