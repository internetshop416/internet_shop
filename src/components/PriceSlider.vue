<template>
    <div class="d-flex justify-content-center p-2">
      <form class="col-md-6 d-flex align-items-center gap-1">
        <label class="fw-bold w-75">Maximum price</label>
        <input
          type="number"
          class="form-control"
          v-model="maxAmount"
          @change="$emit('update:maximal', maxAmount)"
        />
        <input
          type="range"
          class="form-range pe-auto"
          v-model="maxAmount"
          @input="$emit('update:maximal', maxAmount)"
        />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "price-slider",
    data: function () {
      return {
        maxAmount: 30,
      };
    },
    props: ["maximal"],
  };
  </script>
  