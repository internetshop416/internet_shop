<template>
  <div id="productList" class="container">
    <div
      class="container d-flex align-items-center gap-2 mt-2"
      v-for="(item, index) in showItem"
      :key="index"
    >
      <img :src="item.image" class="img-fluid col-md-3 col-sm-3" />
      <div class="col-md-9 p-2 w-50 col-sm-8">
        <h5>
          {{ item.name }}
        </h5>
        <p>
          {{ item.description }}
        </p>
        <b>
          {{ item.price }}
        </b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: ["products", "maximal"],
  computed: {
    showItem: function () {
      let max = this.maximal;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
};
</script>
