<template>
  <div class="contact-page">
    <h3>Consulta de Contactos</h3>
    <plus-icon></plus-icon>
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
import PlusIcon from "./PlusIcon";
import Search from "./Search";
import ContactList from "./ContactList";

export default {
  name: "contact-page",
  components: {
    PlusIcon,
    Search,
    ContactList
  },
  data() {
    return {
      query: "",
      items: []
    };
  },
  mounted() {
    this.items = [
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
    ];
  },
  methods: {
    showItem(item) {
      console.log(item);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
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
