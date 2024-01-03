<template>
  <div class="outer">
    <div class="Container">
      <div class="Image">
        <!-- <img src = @/assets/ok2.jpeg /> -->
        <img :src="require('@/assets/ok2.jpeg')" />
      </div>
      <div class="Info">
        <h1 class="Title">WINTER STYLE</h1>
        <div class="Button">SHOP NOW</div>
      </div>
    </div>
    <div class="Container">
      <div class="Link">
        <div class="Image">
          <img :src="require('@/assets/ok3.jpeg')" />
        </div>
        <div class="Info">
          <h1 class="Title">LIGHT JACKET</h1>
          <div class="Button">SHOP NOW</div>
        </div>
      </div>
    </div>
    <div class="Container">
      <div class="Link">
        <div class="Image">
          <img :src="require('@/assets/ok4.png')" />

          <!-- <img src = 'src/assets/ok4.png '/> -->
        </div>
        <div class="Info">
          <h1 class="Title">SHIRT STYLE</h1>
          <div class="Button">SHOP NOW</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categories-items",
};
</script>

<style scoped>
.outer {
  display: flex;
  /* flex-wrap: wrap; */
  padding: 20px;
  justify-content: space-between;
}
.Container {
  width: 33%;
  height: 33%;
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
}
.Image {
  width: 33%;
  height: 33%;
  object-fit: cover;
}
.Image img {
  width: 450px;
  height: 480px;
}
.Info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Title {
  color: white;
  margin-bottom: 20px;
}
.Button {
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
}
@media (max-width: 1325px) {
  .outer {
    display: inline-block;
  }

  .Info {
    display: flex;
    position: absolute;
    left: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .Image {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 425px) {
    .Image img {
      width: 300%;
    }
  }
}
</style>