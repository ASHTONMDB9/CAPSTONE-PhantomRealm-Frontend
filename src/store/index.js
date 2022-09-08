import { createStore } from 'vuex'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
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
          fetch("https://phantomrealm-api.herokuapp.com/products/add_product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => {
              context.dispatch("getProduct")
            });
            
        },
        // new order
        addOrder: async (context, order) => {
          fetch("https://phantomrealm-api.herokuapp.com/orders/add_order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => context.dispatch("getOrder"));
        },
     // Login
     login: async (context, payload) => {
      let res = await fetch(
        "https://phantomrealm-api.herokuapp.com/users/login",
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
      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://phantomrealm-api.herokuapp.com/users/users/verify", {
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
      } else {
        alert("User not found");
      }
    },
    signUp: async (context, payload) => {
      fetch("https://phantomrealm-api.herokuapp.com/users/register", {
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
          const res  = await fetch("https://phantomrealm-api.herokuapp.com/products/delete_product/" + payload.id,{
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
         const res = await fetch("https://phantomrealm-api.herokuapp.com/products/update_product/" + payload.id,{
          method:"PATCH",
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

  





