<template>
  <div id="productList" class="container">
    <section class="product" v-for="(item, index) in filteredProducts" :key="index">
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <img :src="item.image">
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>{{ item.name }}</h1>
          <span>Артикул: {{ item.id }}</span>
        </div>
        <div class="price">
          <span>{{ item.price }} &#8381;</span> <span class="weight_for_price"> / {{ item.weight_for_price }} грамм</span>
        </div>
        <div class="description">
          <h3>ОПИСАНИЕ</h3>
          <ul>
            <li>Цвет: {{ item.color }}</li>
            <li>Состав: {{ item.ingredients }}</li>
            <li>Нить: {{ item.length }}</li>
            <li>В наличии: {{ item.available }}</li>
            <li>{{ item.description }}</li>
          </ul>
        </div>
        <button class="buy--btn" @click="showModal(item)">Купить</button>
      </div>
    </section>
    <BuyModal v-show="isModalVisible" @close="closeModal" :product="currentProduct">
    </BuyModal>
  </div>

</template>

<script>
import BuyModal from './BuyModal.vue';

export default {
  name: "product-list",
  props: ["products", "maximal", "currentType"],
  components: {
    BuyModal,
  },
  data: function() {
    return {
      isModalVisible: false,
      currentProduct: {},
      filteredProducts: []
    };
  },  
  watch: {
    currentType(newVal, oldVal) {
      if (newVal === 0) {
        this.filteredProducts = this.products;
      }
      else {
        this.filteredProducts = this.products.filter(function(item) {
          return item.type_id === newVal;
        });
      }
    },
    products(newVal, oldVal) {
      this.filteredProducts = this.products;
    }
  },
  methods: {
    showModal(item) {
      this.currentProduct = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
};
</script>

<style scoped>
td {
  vertical-align: top;
}

h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}

img {
  max-width: 100%;
  /* filter: drop-shadow(1px 1px 3px #a6a6a6); */
}

/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: auto;
  padding: 2.5em 0;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}

.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 0 0;
  /* background-color: #9be010; */
  background-color: #f0e5eb;
  /* background: radial-gradient(#fff8fe, #fff8fe); */

  .controls {
    display: flex;
    justify-content: space-between;
    padding: 0.8em;
    color: #fff;

    i {
      cursor: pointer;
    }
  }

  img {
    position: absolute;
    left: 1.5em;
    top: 2em;
    max-width: 70%;
    /* filter: saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3)); */
  }
}

.photo-album {
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    float: left;
    width: 55px;
    height: 55px;
    padding: 7px;
    border: 1px solid #a6a6a6;
    border-radius: 3px;
  }
}

/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}

.title {
  h1 {
    margin-bottom: 0.1em;
    color: #4c4c4c;
    font-size: 1.5em;
    font-weight: 900;
  }

  span {
    font-size: 0.7em;
    color: #a6a6a6;
  }
}

.price {
  margin: 1.5em 0;
  color: #ff3f40;
  font-size: 1.2em;

  span {
    padding-left: 0.15em;
    font-size: 2.9em;
  }

  .weight_for_price {
    font-size: 0.75em;
  }
}

.variant {
  overflow: auto;

  h3 {
    margin-bottom: 1.1em;
  }

  li {
    float: left;
    width: 35px;
    height: 35px;
    padding: 3px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;

    &:first-child,
    &:hover {
      border: 1px solid #a6a6a6;
    }
  }

  li:not(:first-child) {
    margin-left: 0.1em;
  }
}

.description {
  clear: left;
  margin: 2em 0;

  h3 {
    margin-bottom: 1em;
  }

  ul {
    font-size: 0.8em;
    margin-left: 1em;
    list-style-type: none;
  }

  li {
    text-indent: -0.6em;
    margin-bottom: 0.5em;
  }
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }
}

/* ----- Footer Section ----- */
footer {
  padding: 1em;
  text-align: center;
  color: #fff;

  a {
    color: #4c4c4c;

    &:hover {
      color: #ff3f40;
    }
  }
}</style>