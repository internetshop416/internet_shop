<template>
  <div id="app">
    <header class="app-header">
      <h1 class="fw-bold ms-2">{{ database.title.title }}</h1>
      <h4>{{ database.title.description }}</h4>
    </header>

    <section-selector @sectionChangedEvent="onSectionChanged"></section-selector>

    <section v-show="currentSection === 'shop'">
      <type-selector :types="database.types" @typeChanged="onTypeChanged"></type-selector>
      <product-list :products="database.products" :maximal="maximal" :currentType="currentType"></product-list>
      <contacts :contacts="database.contacts" :show-header="true"></contacts>
    </section>
    <section v-show="currentSection === 'gallery'">
      <gallery :items="database.gallery"></gallery>
      <contacts :contacts="database.contacts" :show-header="true"></contacts>
    </section>
    <section v-show="currentSection === 'contacts'">
      <contacts :contacts="database.contacts" :show-header="false"></contacts>
    </section>
    <section v-show="currentSection === 'delivery'">
      <delivery-options></delivery-options>
    </section>
  </div>
</template>

<script>
import TypeSelector from "./components/TypeSelector.vue";
import ProductList from "./components/ProductList.vue";
import Contacts from "./components/Contacts.vue";
import Gallery from "./components/Gallery.vue";
import DeliveryOptions from "./components/DeliveryOptions.vue";
import SectionSelector from "./components/SectionSelector.vue";

import json from '../data/database_empty.json'

export default {
  name: "App",
  data: function () {
    return {
      maximal: 0,
      products: [],
      database: json,
      currentType: 0,
      currentSection: "shop"
    };
  },
  components: {
    ProductList,
    TypeSelector,
    SectionSelector,
    Contacts,
    DeliveryOptions,
    Gallery,
  },
  methods: {
    onTypeChanged: function(id) {
      this.currentType = id;
    },

    onSectionChanged: function(sectionName) {
      this.currentSection = sectionName;
    }
  },
  mounted: function () {
  },
  created() {
    document.title = this.database.title.page_title;
    fetch(process.env.NODE_ENV === 'development' ? '/database.json' : '/internet_shop/database.json')
      .then(response => response.json())
      .then((data) => this.database = data);
  }
};
</script>

<style>
body {
  background-image: url("../public/images/bg1.jpg");
  background-repeat: repeat-y repeat-x;
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
  background-color: #eee;
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

.app-header {
  margin: 50px;
  text-align: center;
  margin-bottom: 25px;
}

.app-header {
  background-color: white;
  border-radius: 5px;
  padding: 1em;
}

.app-header h1 {
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #342900, #860101);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
