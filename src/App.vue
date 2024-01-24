<template>
  <div id="app">
    <h1 class="fw-bold ms-2">Бобинки-пушинки</h1>
    <!-- <price-slider :maximal.sync="maximal"></price-slider> -->
    <product-list :products="products" :maximal="maximal"></product-list>
  </div>
</template>

<script>
import PriceSlider from "./components/PriceSlider.vue";
import ProductList from "./components/ProductList.vue";
import json from '../data/database.json'
export default {
  name: "App",
  data: function () {
    return {
      maximal: 30,
      products: [],
      database: json
    };
  },
  components: {
    ProductList,
    PriceSlider,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((res) => res.json())
      .then((save) => {
        this.products = save;
      });
  },
};
</script>
