<template>
  <div class="product__card">
    <div class="image1">
      <img
        :src="image_url"
        :alt="brand"
        class="product__image"
        loading="lazy"
      />
    </div>

    <div class="product__header">
      <span class="brand">{{ brand }}</span>
      <span class="product__qty">{{
        in_stock ? "In Stock" : "Out of Stock"
      }}</span>
    </div>
    <p class="product__name">{{ productName }}</p>
    
    <div class="price">
      <span>₹ {{ price }}</span>

      <button
        class="cart"
        @click="$router.push('/Cart')"
        aria-label="View Item"
      >
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </button>
     
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  components: {
  },
  props: [
    "productId",
    "productName",
    "brand",
    "price",
    "image_url",
    "in_stock",
  ],
  
};
</script>

<style scoped>
.product__card {
  border: 1px solid var(--grey);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.05s ease-in;
  padding: 15px;
  text-align: left;
  border-radius: 15px;
  color: #222;
  width: 300px;
  
}

.product__image {
  height: auto;
  max-width: 100%;
  border-radius: 5px;
}
.image1 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.image1 img {
  height: 224px;
  width: 200px;
}
.product__name {
  padding-block: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.brand {
  font-size: 1.5rem;
  display: inline-block;
  font-weight: 700;
}

.product__qty {
  font-size: 1.5rem;
  display: inline-block;
  padding-top: 10px;
  background-color: var(--dark-green);
  color: white;
  border-radius: 5px;
  padding: 5px;
}

.rating {
  padding-bottom: 5px;
  color: gold;
}

.rating i {
  font-size: 1.5rem;
}

.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price span {
  font-size: 1.6rem;
  font-weight: 700;
}

.cart {
  cursor: pointer;
  height: 33px;
  width: 40px;
  color: var(--dark-green);
  border-radius: 50%;
  font-size: 1.3rem;
  display: grid;
  place-items: center;
  text-align: center;
  background-color: var(--light-green);
}
</style>
