<template>
  <div class="Container">
    <!-- <h1>{{$store.state.cart}}</h1> -->
    <div class="FilterContainer">
      <Filter
        ><FilterText>Filter Products:</FilterText>
        <Select name="color" onChange="{handleFilters}">
          <Option disabled selected> Color </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select name="size" onChange="{handleFilters}">
          <Option disabled selected> SIZE </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter
        ><FilterText>Sort Product:</FilterText>
        <Select>
          <Option value="newest">Newest</Option>
          <Option value="asc">Price(asc)</Option>
          <Option value="desc">Price(desc)</Option>
        </Select>
      </Filter>
    </div>
    <div class="container">
      <div class="product__container">
        <product-card
          v-for="(product, index) in products"
          :key="index"
          :productId="product.id"
          :productName="product.title"
          :brand="product.desc"
          :price="product.price"
          :image_url="product.img"
          :in_stock="product.inStock"
        />
      </div>
    </div>

  </div>
  <footer-view />
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import FooterView from "@/components/FooterView.vue";

import { productsData } from "../../data";
export default {
  name: "ProductView",
  components: {
    ProductCard,
    FooterView,
  },
  data() {
    return {
      products: productsData,
    };
  },
};
</script>


<style>
.Container {
  margin: 1rem;
}
.product__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
  /* gap: 1rem; */
}
.Title {
  margin: 20px;
  font-size: 2rem;
}
.FilterContainer {
  display: flex;
  justify-content: space-between;
}
.Filter {
  margin: 20px;
}
FilterText {
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
}
Select {
  padding: 10px;
  margin-right: 20px;
}
</style>