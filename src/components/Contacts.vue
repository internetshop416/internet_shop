<template>
  <footer>
    <div class="contacts">
      <p class="contacts-header">Наши контакты:</p>
      <br>
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
  props: ['contacts']
};
</script>

<style>
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
</style>
  