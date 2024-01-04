<template>
  <main-header />
 
  <about-header
    heading="# Your cart"
    subHeading="Add your coupon code and save up to 70% on all purchases!"
  />
  <section class="cart-section">
    <div class="container">
      <section>
        <div class="cart-details">
          <table>
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="index">
                <td>
                  <div class="delete-btn" @click="deleteItem">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                  </div>
                </td>
                <td>
                  <img class="img" :src="item.image_url"
                      
                   />
                </td>
                <!-- <h1>item.images[0]</h1> -->
                <td>{{ item.brand }}</td>
                <td>
                  {{ item.currency }}
                  {{ item.price.toFixed(2) }}
                </td>
                <td>
                  <input
                    type="number"
                    v-model="item.quantity"
                    placeholder="1"
                    min="1"
                    max="10"
                    @input="updateTotalPrice(item)"
                  />
                </td>
                <td>
                  {{ item.currency }}
                  {{ (item.quantity * item.price).toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="checkout-section">
          <div class="coupon">
            <h3>Apply Coupon</h3>
            <form>
              <input type="text" placeholder="Enter coupon code" />
              <action-button btnvalue="Apply" />
            </form>
          </div>
          <div class="checkout">
            <h3>Cart Details</h3>
            <table>
              <thead>
                <tr>
                  <td>Cart Total</td>
                  <td>{{ subtotal.toFixed(2) }}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shipping Fee</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>
                    <strong>{{ subtotal.toFixed(2) }} </strong>
                  </td>
                </tr>
              </tbody>
            </table>
             <action-button btnvalue=" Checkout" />
          </div>
        </div>
      </section>
      <!-- <div class="no-cart" >
                <div class="no-cart-text">
                    <h3>Your cart is empty!</h3>
                    <p>Browse our shop and discover our latest products.</p>
                </div>
                <router-link to="/shop">
                    <action-button btnvalue="Start Shopping" />
                </router-link>
            </div> -->
    </div>
  </section>
  <footer-view />
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import ActionButton from "@/components/ActionButton.vue";

import AboutHeader from "@/components/AboutHeader";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: { FooterView, AboutHeader,ActionButton },
  name: "CartView",
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    ...mapActions(["delete_item", "update_quantity"]),
    deleteItem(index) {
      this.delete_item(index);
    },

    // update total price of cart and increase the quantity of product in cart
    updateTotalPrice(item) {
      this.update_quantity(item);
      this.cart.forEach((item) => {
        this.total += item.quantity * item.price;
      });
    },
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["subtotal"]),
  },
  mounted() {
    this.cart.forEach((item) => {
      this.total += item.quantity * item.price;
    });
  },
};
</script>

<style scoped>
.no-cart {
  display: grid;
  place-items: center;
  gap: 30px;
}

.no-cart-text {
  text-align: center;
}

.no-cart img {
  height: 150px;
  width: 30%;
}

.cart-details {
  overflow-x: auto;
}
.img {
  height: 70px;
  width: 70px;
  margin-inline: auto;
  object-fit: contain;
}

table {
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
}
td {
  font-size: 1rem;
}

.delete-btn {
  cursor: pointer;
}

.cart-details table thead {
  border: 1px solid lightgrey;
  border-left: none;
  border-right: none;
}

.cart-details table thead tr td {
  font-weight: 600;
  text-transform: uppercase;
  padding-block: 2rem;
  text-align: center;
}

.cart-details table tbody td {
  padding-block: 2rem;
  text-align: center;
}

.cart-details table tbody td i {
  cursor: pointer;
}

/* Checkout */
.checkout-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.coupon {
  width: 40%;
}

form {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

form input {
  width: 100%;
}

.checkout {
  width: 40%;
  padding: 2.5rem;
  border: 1px solid lightgrey;
}

.checkout table {
  margin-bottom: 2rem;
}

.checkout td {
  border: 1px solid lightgrey;
  padding: 0.8rem;
}

@media (max-width: 699px) {
  .cart-details table {
    table-layout: fixed;
  }
  .cart-details table thead td {
    width: 200px;
  }
  .checkout-section {
    flex-direction: column;
    gap: 3rem;
  }
  .checkout,
  .coupon {
    width: 100%;
  }
}
</style>
