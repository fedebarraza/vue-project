<template>
  <div class="contact-page">
    <h3>Consulta de Contactos</h3>
    <open-modal></open-modal>
    <search></search>
    <contact-list
      :items="items"
      @details="showItem"
      @delete="deleteItem"
    ></contact-list>
  </div>
</template>
<script>
import OpenModal from "./OpenModal";
import Search from "./Search";
import ContactList from "./ContactList";

export default {
  name: "contact-page",
  components: {
    OpenModal,
    Search,
    ContactList
  },
  data() {
    return {
      items: [
        {
          id: 1,
          tipo: "Ingeniero",
          nombre: "Jorge",
          apellido: "Miller",
          telefono: "0303456",
          direccion: "San Juan 315",
          pais: "Argentina",
          provincia: "Buenos Aires",
          localidad: "Ramos Mejia"
        }
      ]
    };
  },
  methods: {
    showItem(item) {
      console.log(item);
    },
    deleteItem(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-page {
  margin: 10px;
  background-color: white;
  display: inline-block;

  h3 {
    width: 40%;
    text-align: center;
  }
}
</style>
