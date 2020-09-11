<template>
  <div class="contact-page">
    <h3>Consulta de Contactos</h3>
    <open-modal></open-modal>
    <search :query.sync="query"></search>
    <contact-list
      :items="items"
      :query="query"
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
      query: "",
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
        },
        {
          id: 2,
          tipo: "Arquitecto",
          nombre: "Roberto",
          apellido: "Sosa",
          telefono: "221333",
          direccion: "Mendoza 315",
          pais: "Argentina",
          provincia: "Buenos Aires",
          localidad: "Avellaneda"
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
    },
    searchItem(query) {
      console.log(query);
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
