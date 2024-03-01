<template>
  <footer class="contacts-footer">
    <div class="contacts">
      <div v-if="showHeader">
        <p class="contacts-header">Наши контакты:</p>
        <br>
      </div>
      <table>
        <tbody>
          <tr v-for="(item, index) in this.contacts" :key="index">
            <td>{{ item.title }}:&nbsp;</td>
            <td><a :href="item.href">{{ item.value }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: "contacts-footer",
  props: ['contacts', 'showHeader']
};
</script>

<style>
.contacts-footer {
  margin: 50px;
  background-color: white;
  border-radius: 5px;
  padding: 3em;
}

.contacts-footer table {
  margin: 0 auto;
}

.contacts-header {
  text-align: center;
}

.contacts {
  width: 400px;
  margin: auto;
}
</style>
  