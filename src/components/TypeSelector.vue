<template>
  <div>
    <section class="type-selector">
      <ul class="breadcrumb">
        <li v-for="(type, index) in types" :key="index">
          <a v-if="index !== currentIndex" href="javascript:void(0)" @click="onTypeClicked(type.id)">{{ type.name }}</a>
          <span v-else class="current-link">{{ type.name }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
  
<script>
export default {
  name: "type-selector",
  props: ["types"],
  emits: ['typeChanged'],
  methods: {
    onTypeClicked: function(id) {
      this.currentIndex = id;
      this.$emit('typeChanged', id);
    }
  },
  data: function () {
    return {
      currentIndex: 0
    };
  },
};
</script>

<style>
.type-selector {
  background-color: white;
  color: black;
  width: 1290px;
  margin: 0 auto;
  border-radius: 5px;
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
  