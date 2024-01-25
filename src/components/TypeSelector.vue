<template>
  <div>
    <section class="type-selector">
      <div v-for="(type, index) in types" :key="index">
        <button @click="onTypeClicked(type.id)">{{ type.name }}</button>
      </div>
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
      this.$emit('typeChanged', id);
    }
  },
  data: function () {
    return {
      maxAmount: 30,
    };
  },
};
</script>

<style>
.type-selector {
  background-color: white;
  color: black;
}
</style>
  