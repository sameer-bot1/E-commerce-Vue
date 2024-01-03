<template>
  <section>
    <div class="container">
      <div class="ad1">
        <SaleCard
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          buttonText="Learn More"
          backgroundImage="first"
        />
        <SaleCard
          advertText="The new warm and cozy winter collection"
          advertTitle="winter"
          buttonText="Collections"
          backgroundImage="second"
        />
      </div>
      <div class="ad2">
        <SaleCard
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="third"
          :haveButton="false"
        />
        <SaleCard
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="fourth"
          :haveButton="false"
        />
        <SaleCard
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="fifth"
          :haveButton="false"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SaleCard from "@/components/SpecialSale/SaleCard.vue";

export default {
  components: { SaleCard },
  name: "SaleSection",
};
</script>

<style scoped>
section {
  margin-top: 3rem;
}
.ad1,
.ad2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ad2 {
  margin-top: 3rem;
  gap: 2rem;
}
@media (max-width: 1000px) {
}

@media (max-width: 670px) {
  .ad1,
  .ad2 {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>