<template>
  <main-header />
  <about-header heading="#WhoWeAre" subHeading="Get to know us" />
  <div class="container">
    <article>
      <img
        :src="require('@/assets/abt.jpeg')"
        class="about-img"
        alt="about Us"
      />
      <!-- <img
                src="require('@/assets/1.png')"
                class="about-img"
                alt="Who we are"
            /> -->
      <div class="about-text">
        <h1>Who We Are ?</h1>
        <p>
          Our company is a forward-thinking innovator, dedicated to delivering
          cutting-edge solutions in [industry/sector]. With a relentless
          commitment to excellence, we blend expertise with creativity to shape
          the future. Our team of passionate professionals collaborates
          seamlessly to provide tailor-made [products/services] that exceed
          expectations. Rooted in integrity and driven by a customer-centric
          approach, we aim to redefine standards and inspire positive change.
          Together, we navigate challenges, embrace opportunities, and uphold a
          culture of continuous improvement. Join us on this journey as we build
          a legacy of success, driven by our unwavering dedication to quality,
          innovation, and client satisfaction.
        </p>
      </div>
    </article>
    <div class="video-section">
      <h1>Download Our <a href="/">App</a></h1>
      <!-- <img src="'@/assets/abt.jpeg'" alt="" class="video-banner" /> -->
      <img :src="require('@/assets/downloadApp.jpeg')" />
    </div>
  </div>
  <service-section />
  <footer-view />
</template>
<script>
import AboutHeader from "@/components/AboutHeader.vue";
import ServiceSection from "@/components/HomeCompnent/ServiceSection.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "AboutView",
  components: {
    AboutHeader,
    ServiceSection,
    FooterView,
  },
};
</script>


<style scoped>
article {
  display: flex;
  gap: 4rem;
  margin-bottom: 2.5rem;
}
.about-img {
  height: 50vh;
  width: 50%;
  object-fit: cover;
}

.about-text {
  width: 50%;
}

.about-text p {
  line-height: 25px;
}

.video-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;
  text-align: center;
}

.video-banner {
  height: 60vh;
  width: 60%;
  border-radius: 10px;
  margin-top: 2rem;
}

.video-section a {
  text-decoration: underline;
  color: var(--dark-blue);
}

@media (max-width: 499px) {
  article {
    flex-direction: column;
  }
  .about-img,
  .about-text,
  .video-banner {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
  }
}
</style>
