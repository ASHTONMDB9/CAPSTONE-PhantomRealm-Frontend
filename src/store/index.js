import { createStore } from "vuex";
import router from "../router/index";
import createPersistedState from "vuex-persistedstate";
import swal from "sweetalert";
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
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },

    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 0;
        return total + price * qty;
      }, 0);
    },
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, token) => {
      state.Token = token;
    },
    setProduct: (state, product) => {
      state.product = product;
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
      (state.user = ""), (state.Token = ""), (state.cart = []);
    },
    AddtoCart(state, product) {
      const item = state.cart.find((p) => p.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({
          ...product,
          price: Number(product.price),
          quantity: 1,
        });
      }
    },
    RemoveFromCart(state, id) {
      state.cart = state.cart.filter((p) => p.id !== id);
    },
    DecreaseQTY(state, id) {
      const item = state.cart.find((p) => p.id === id);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter((p) => p.id !== id);
      }
    },
    ClearCart(state) {
      state.cart = [];
    },
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
      fetch(
        "https://capstone-phantomrealm-backend.onrender.com/orders/add_order",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
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
      if (data.msg === "Password incorrect") {
        swal("Error", "Incorrect Password");
      } else if (data.msg === "Email not found please register") {
        swal("Error", "Email incorrect or not found please register");
      } else {
        // Verify token
        fetch(
          "https://capstone-phantomrealm-backend.onrender.com/users/users/verify",
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": data.token,
            },
          }
        )
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);

            router.push("/Store");
          });
      }
    },

    // Forgot Password
    forgotPassword: async (context, payload) => {
      try {
        let res = await fetch(
          "https://capstone-phantomrealm-backend.onrender.com/users/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: payload.email,
            }),
          }
        );

        let data = await res.json();

        if (data.msg === "Reset link sent successfully") {
          swal("Success", "Password reset link has been sent to your email");

          router.push("/login");
        } else {
          swal("Error", data.msg, "error");
        }
      } catch (error) {
        console.log(error);

        swal("Error", "Something went wrong", "error");
      }
    },

    // Reset Password
    resetPassword: async (context, payload) => {
      try {
        let res = await fetch(
          `https://capstone-phantomrealm-backend.onrender.com/users/reset-password/${payload.token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: payload.password,
            }),
          }
        );

        let data = await res.json();

        if (data.msg === "Password reset successful") {
          swal("Sucess", "Password updated successfully");

          router.push("/login");
        } else {
          swal("Error", data.msg, "error");
        }
      } catch (error) {
        console.log(error);

        swal("Error", "Something went wrong", "error");
      }
    },

    //updateUser
    updateUser: async (context, payload) => {
      swal({
        title: "Update Profile?",
        text: "Do you want to save these changes?",
        icon: "warning",
        buttons: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          try {
            let res = await fetch(
              `https://capstone-phantomrealm-backend.onrender.com/users/update_user/${payload.id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": payload.token,
                },
                body: JSON.stringify({
                  email: payload.email,
                  password: payload.password,
                  full_name: payload.full_name,
                  phone_number: payload.phone_number,
                  user_type: payload.user_type,
                }),
              }
            );

            let data = await res.json();
            console.log(data);

            if (data.msg === "User updated successfully") {
              swal("Updated!", "Profile updated successfully.");

              // optional: refresh user state
              context.commit("setUser", {
                ...context.state.user,
                user: {
                  ...context.state.user.user,
                  email: payload.email,
                  full_name: payload.full_name,
                  phone_number: payload.phone_number,
                },
              });
            } else {
              swal("Error", "Failed to update profile", "error");
            }
          } catch (error) {
            console.error(error);
            swal("Error", "Something went wrong", "error");
          }
        }
      });
    },

    //deleteUser
    deleteUser: async (context, payload) => {
      swal({
        title: "Are you sure?",
        text: "This account will be permanently deleted!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            let res = await fetch(
              `https://capstone-phantomrealm-backend.onrender.com/users/delete_user/${payload.id}`,
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

            swal("Deleted!", "User account has been deleted.");

            // logout after deletion (important)
            context.commit("Logout");

            // redirect to login
            window.location.href = "/login";
          } catch (error) {
            console.error(error);
            swal("Error", "Failed to delete user", "error");
          }
        }
      });
    },

    // Sign Up
    signUp: async (context, payload) => {
      fetch(
        "https://capstone-phantomrealm-backend.onrender.com/users/register",
        {
          method: "POST",
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
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    addToCart({ commit, state }, product) {
      const existingItem = state.cart.find((p) => p.id === product.id);

      commit("AddtoCart", product);

      if (existingItem) {
        swal({
          title: "Updated Cart",
          text: `Item ${product.title} has been updated in your cart`,
          timer: 5000,
          buttons: false,
        });
      } else {
        swal({
          title: "Added to Cart!",
          text: `${product.title} has been added to your cart`,
          timer: 5000,
          buttons: false,
        });
      }
    },

    removeFromCart({ commit }, id) {
      commit("RemoveFromCart", id);
    },

    decreaseQty({ commit }, id) {
      commit("DecreaseQTY", id);
    },

    clearCart({ commit }) {
      commit("ClearCart");
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
              "https://capstone-phantomrealm-backend.onrender.com/products/delete_product/" +
                payload.id,
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

            swal("Deleted!", "Product has been deleted.");

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
              "https://capstone-phantomrealm-backend.onrender.com/products/update_product/" +
                payload.id,
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

            swal("Updated!", "Product updated successfully.");
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
