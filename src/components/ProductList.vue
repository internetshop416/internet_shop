<template>
  <div id="productList" class="container">
    <div
      class="container d-flex align-items-center gap-2 mt-2"
      v-for="(item, index) in filteredItems"
      :key="index"
    >
      <img :src="item.image" class="img-fluid col-md-3 col-sm-3" />
      <div class="col-md-9 p-2 w-50 col-sm-8">
        <h5>{{ item.name }}</h5>
        <table>
          <tbody>
            <tr>
              <td>Артикул:</td>
              <td>{{ item.id }}</td>
            </tr>
            <tr>
              <td>Цвет:</td>
              <td>{{ item.color }}</td>
            </tr>
            <tr>
              <td>Состав:</td>
              <td>{{ item.id }}</td>
            </tr>
            <tr>
              <td>В наличии:</td>
              <td>{{ item.available }} грамм</td>
            </tr>
            <tr>
              <td>Длина нити:</td>
              <td>{{ item.length }}</td>
            </tr>
            <tr>
              <td>Описание:</td>
              <td>{{ item.description }}</td>
            </tr>
            <tr>
              <td>Цена:</td>
              <td><strong>{{ item.price }} руб.</strong> за {{ item.weight_for_price }} грамм</td>
            </tr>
          </tbody>
        </table>
        <button>Заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: ["products", "maximal"],
  computed: {
    filteredItems: function () {
      const max_price = this.maximal;
      return this.products.filter(function (item) {
        return max_price <= 0 || item.price <= max_price;
      });
    },
  },
};
</script>
