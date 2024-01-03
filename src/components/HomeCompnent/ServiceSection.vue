<template>
  <section class="services">
    <h2>Services</h2>
    <div class="service-container">
      <service-card name="Free Shipping">
        <img :src="require('@/assets/shipping.svg')" />
      </service-card>

      <service-card name="Easy Order">
        <!-- <img src="@/assets/order.svg" alt="Easy Order" /> -->
        <img :src="require('@/assets/order.svg')" />
      </service-card>
      <service-card name="Smart Saving">
        <!-- <img src="@/assets/savings.svg" alt="Smart Saving" /> -->
        <img :src="require('@/assets/savings.svg')" />
      </service-card>
      <service-card name="Promotions">
        <!-- <img src="@/assets/promos.svg" alt="Promotions" /> -->
        <img :src="require('@/assets/promos.svg')" />
      </service-card>
      <service-card name="24/7 Support">
        <!-- <img src="@/assets/support.svg" alt="24/7 Support"/> -->
        <img :src="require('@/assets/support.svg')" />
      </service-card>
      <service-card name="Home Delivery">
        <!-- <img src="@/assets/delivery.svg" alt="Home Delivery" /> -->
        <img :src="require('@/assets/delivery.svg')" />
      </service-card>
    </div>
  </section>
</template>

<script>
import ServiceCard from "@/components/HomeCompnent/ServiceCard.vue";
export default {
  name: "ServiceSection",
  components: {
    "service-card": ServiceCard,
  },
};
</script>

<style scoped>
.services {
  text-align: center;
  margin-bottom: 3rem;
}

.services h2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.service-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

img {
  height: 100px;
  width: 100px;
}

@media (max-width: 399px) {
  .service-container {
    padding: 2rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: initial;
  }
}
</style>
