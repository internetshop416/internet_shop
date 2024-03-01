<template>
  <div>
    <section class="section-selector">
      <ul class="breadcrumb">
        <li v-for="(section, index) in sections" :key="index">
          <a v-if="section.type !== currentSection" href="javascript:void(0)" @click="changeSection(section)">{{ section.title }}</a>
          <span v-else class="current-link">{{ section.title }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
  
<script>
export default {
  name: "section-selector",
  props: [],
  emits: ['sectionChangedEvent'],
  data: () => ({
    sections: [
      { type: "shop", title: "Магазин" },
      { type: "contacts", title: "Контакты" },
      { type: "delivery", title: "Условия доставки" },
    ],
    currentSection: "shop"
  }),
  methods: {
    changeSection: function(section) {
      this.currentSection = section.type;
      this.$emit('sectionChangedEvent', section.type);
    }
  }
};
</script>

<style>
.section-selector {
  background-color: white;
  color: black;
  max-width: 1290px;
  margin: 0 auto;
  border-radius: 5px;
}

.type-description {
  background-color: white;
  color: black;
  max-width: 1290px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
}

/* Style the list */
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: white;
  display:flex;
  justify-content: center;
  border-radius: 5px;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "|\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

.current-link {
  color: #aaa !important;
}
</style>
  