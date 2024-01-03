<template>
  <main-header />
  <about-header
    heading="#Contact Us"
    subHeading="Get in Touch: Elevate Your Experience with Seamless Contact"
  />
  <div class="container">
    <div class="map-section">
      <div class="map-details">
        <span>Get in touch</span>
        <h3>Visit one of our agency locations or contact us today</h3>
        <h4>Head Office</h4>
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <p>23 lorem Street lipsum, Bhilai, Chhattisgarh</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <p>sameerbhardiya@gmail.com</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" />
            <p>+91 xxxxxxxxxx</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'stopwatch']" />
            <p>Monday to Saturday: 9:00am to 7:00pm</p>
          </li>
        </ul>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9415.170908693513!2d81.34517904653256!3d21.195358222787174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29232fc0ce803b%3A0xf3524998f2734dcf!2sAvenue%20C%2C%20Sector%206%2C%20Bhilai%2C%20Chhattisgarh%20490006!5e0!3m2!1sen!2sin!4v1704189668762!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div class="form-section">
      <form>
        <span>Leave a message</span>
        <h3>We love to hear from you</h3>

        <div class="form-control">
          <input type="text" placeholder="Your name" required />
        </div>
        <div class="form-control">
          <input type="email" placeholder="E-mail" required />
        </div>
        <div class="form-control">
          <input type="text" placeholder="Subject" required />
        </div>
        <div class="form-control">
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
        </div>
        <!-- <action-button btnvalue="Submit" /> -->
        <button class="btn">Submit</button>
      </form>
    </div>
  </div>
  <footer-view />
</template>
<script>
import AboutHeader from "@/components/AboutHeader.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  components: {
    AboutHeader,
    FooterView,
  },
  name: "ContactView",
};
</script>

<style scoped>
/* Map */
.map-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
}

.map-details {
  width: 40%;
}

span {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: rgb(50, 168, 207);
}

.map-details h3 {
  padding-block: 2rem;
  font-size: 2.7rem;
  line-height: 35px;
}

.map-details h4 {
  font-size: 1.6rem;
  padding-bottom: 1rem;
}

li {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.map {
  width: 55%;
  height: 400px;
}

.map-img {
  width: 100%;
  height: 100%;
}

/* Form */

.form-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-block: 5rem;
  gap: 3rem;
}

form {
  width: 70%;
}

form h3 {
  padding-block: 2rem;
}

.form-control {
  padding-bottom: 2rem;
  border: none;
}
input,
textarea {
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 7px;
}

input:hover,
textarea:hover {
  outline: none;
  border: 1px solid black;
}

.btn {
  border: none;
  background-color: rgb(39, 143, 178);
  padding: 8px 15px;
  border: 2px solid lightblue;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
}

@media (max-width: 799px) {
  form {
    width: 50%;
  }
}
@media (max-width: 599px) {
  .map-section {
    flex-direction: column;
  }
  .map-details,
  .map,
  form {
    width: 100%;
  }

  form h3 {
    font-size: 2.7rem;
  }

  .form-section {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>