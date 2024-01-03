<template>
  <div class="Containers">
    <div class="wrapper">
      <div class="left">
        <div class="language">En</div>
        <div class="search-container">
          <input placeholder="search" />
          <Search />
        </div>
      </div>
      <div class="center">
        <Logo>SAM.</Logo>
      </div>
      <div class="right">
        <router-link to="/">
          <div class="menu-item">Home</div>
        </router-link>
        <router-link to="/Product">
          <div class="menu-item">Products</div>
        </router-link>
        <router-link to="/about">
          <div class="menu-item">About Us</div>
        </router-link>
        <router-link to="/Contact">
          <div class="menu-item">Contacts Us</div>
        </router-link>
        <router-link to="/Cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <div class="menu-item"></div>
        </router-link>

        <router-link to="/cart">
          <div class="menu-item">
            <badge :badge-content="quantity" color="primary">
              <ShoppingCartOutlined />
            </badge>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<style scoped>
.Containers {
  height: 60px;
  position: sticky;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0; 
}

.left {
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.language {
  margin-right: 10px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-container input {
  margin-right: 5px;
}

.center {
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 10px;
}

.right {
  display: flex;
  align-items: center;
}

.menu-item {
  margin-right: 40px;
  cursor: pointer;
  font-size: 1.1rem;
  /* text-decoration: none; */
}
.menu-item:hover {
  color: #3498db;
}

.right a {
  text-decoration: none;
  /* text-decoration: none; */
  color: black;
  font-family: "League Spartan";
}

@media (max-width: 900px) {
  .center {
    display: none;
  }
  .left {
    display: none;
  }
  .wrapper {
    align-content: center;
    justify-content: center;
  }
  .menu-item {
   
    cursor: pointer;
    font-size: 0.8rem;
  }
}
@media (max-width: 423px) {
  .menu-item {
    margin: 8px;
  }
}
</style>
