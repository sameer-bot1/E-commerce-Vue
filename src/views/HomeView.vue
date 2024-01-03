<template>
  <div class="home">
    <section class="hero__section">
      <div class="container">
        <div class="hero__text">
          <h4>Trade-in-offer</h4>
          <h1>Super value deals</h1>
          <h2>On all products</h2>
          <p>Save more with coupons & get up to 70% off!</p>
          <router-link to="/shop">
            <action-button btnvalue="Start Shopping" />
          </router-link>
        </div>
      </div>
    </section>
    <service-section />

    <h1 class="Featured">Our Featured Products</h1>
    <CategoriesItem />
    <banner-section />
    <sale-section />
    <ContactUsSection />
    <footer-view />
  </div>
</template>

<script>
import ServiceSection from "@/components/HomeCompnent/ServiceSection.vue";
import BannerSection from "@/components/BannerSection.vue";

import CategoriesItem from "@/components/CategoriesItem.vue";
import SaleSection from "@/components/SpecialSale/SaleSection.vue";
import ContactUsSection from "@/components/ContactUs.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    ServiceSection,
    BannerSection,
    CategoriesItem,
    SaleSection,
    ContactUsSection,
    FooterView,
  },
};
</script>
<style scoped>
.hero__section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  background-image: url("@/assets/crl.jpeg");
  background-position: 85% 30%;
  background-size: cover;
}

.hero__text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.hero__text h4 {
  padding-bottom: 1rem;
}

.hero__text h1 {
  color: var(--dim-blue);
}

.hero__text p {
  margin-bottom: 1rem;
}

@media (min-width: 2000px) {
  .hero__section {
    background-position: 70% 12%;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #e3e6f3;
    height: 50vh;
  }
}

@media (min-width: 3000px) {
  .hero__section {
    background-position: 60% 30%;
    /* background-size: cover; */
  }
}
.Featured {
  margin-top: 3rem;
}
</style>