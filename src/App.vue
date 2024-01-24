<template>
  <div id="app">
    <header>
      <h1 class="fw-bold ms-2">{{ database.title.title }}</h1>
      <p>{{ database.title.description }}</p>
    </header>
    <!-- <price-slider :maximal.sync="maximal"></price-slider> -->
    <!-- <product-list :products="products" :maximal="maximal"></product-list> -->

    <product-list :products="database.products" :maximal="maximal"></product-list>

    <footer>
      <div class="contacts">
        <p class="contacts-header">Наши контакты:</p>
        <br>
        <table>
          <tbody>
            <tr  v-for="(item, index) in database.contacts" :key="index">
              <td>{{item.title}}:&nbsp;</td>
              <td><a :href="item.href">{{ item.value }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
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
      maximal: 0,
      products: [],
      database: json
    };
  },
  components: {
    ProductList,
    PriceSlider,
  },
  mounted: function () {
  },
};
</script>

<style>
  body {
    background-image: url("../public/images/background.jpg");
    background-repeat: repeat-y;
  }

  * {
	box-sizing: border-box;
}

html,
body {
	height: 100%;
}

body {
	display: grid;
	grid-template-rows: 1fr;
	font-family: "Raleway", sans-serif;
	background-color: #01e37f;
}

h3 {
	font-size: 0.7em;
	letter-spacing: 1.2px;
	color: #a6a6a6;
}

img {
			max-width: 100%;
			filter: drop-shadow(1px 1px 3px #a6a6a6);
		}

  header {
    margin: 50px;
    text-align: center;
  }

  footer {
    margin: 50px;
    background-color: white;
    border-radius: 5px;
    padding: 3em;
  }

  .contacts-header {
    text-align: center;
  }

  .contacts {
    width: 400px;
    margin: auto;
  }

  header {
    background-color: white;
    border-radius: 5px;
    padding: 1em;
  }

  header h1 {
    font-size: 70px;
    font-weight: 600;
    background-image: linear-gradient(to left, #342900, #860101);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
</style>
