import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        cart: [],
        products: [],
    },
    mutations: {
       
        addToCart(state, payload) {
            if (state.cart.length != 0) {
                // state.cart.length = 0;
                let item = state.cart.find((item) => item.id === payload.id);

                if (item) {
                    if (item.size === payload.size) {
                        if (item.quantity < 10) {
                            item.quantity += payload.quantity;
                        } else if (item.quantity >= 10) {
                            item.quantity = 10;
                        }
                    } else {
                        console.log("different size");
                        state.cart = [...state.cart, payload];
                    }
                } else {
                    state.cart = [...state.cart, payload];
                }
            } else {
                state.cart = [...state.cart, payload];
            }
        },
        deleteItem(state, payload) {
            let index = state.cart.indexOf(payload);
            state.cart.splice(index, 1);
        },
        updateQuantity(state, payload) {
            if (payload.quantity > 0) {
                let item = state.cart.find(
                    (item) =>
                        item._id === payload._id && item.size === payload.size
                );
                item.quantity = payload.quantity;
            }
        },
        emptyCart(state) {
            state.cart = [];
        },
       
    },
    actions: {
        
        
        add_to_cart(context, payload) {
            context.commit("addToCart", payload);
        },
        delete_item(context, payload) {
            context.commit("deleteItem", payload);
        },
        update_quantity(context, payload) {
            context.commit("updateQuantity", payload);
        },
        clear_cart(context) {
            context.commit("emptyCart");
        },
        
    },
    getters: {
        subtotal: (state) => {
            let subtotal = 0;
            state.cart.forEach((item) => {
                subtotal += item.price * item.quantity;
            });
            return subtotal;
        },
        subtotalGst: (state) => {
            let subtotal = 0;
            state.cart.forEach((item) => {
                subtotal += item.price * item.quantity;
            });     
            const gst = 0.15 * subtotal;
        
            const totalWithGst = subtotal + gst;
        
            return totalWithGst;
        },
        gst: (state) => {
            let subtotal = 0;
            state.cart.forEach((item) => {
                subtotal += item.price * item.quantity;
            });     
            const gst = 0.15 * subtotal;
        
            return gst;
        },
       
    },
    plugins: [createPersistedState()],
});

export default store;
