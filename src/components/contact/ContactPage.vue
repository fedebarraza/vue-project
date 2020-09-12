<template>
  <div class="contact-page">
    <h3>Consulta de Contactos</h3>
    <contact-icon></contact-icon>
    <div class="menu">
      <a href="#" @click.prevent="openModal = true">Nuevo Contacto</a>
      <search @search="searchItem"></search>
    </div>
    <contact-list
      :items="searchedItems"
      :query="query"
      @details="editItem"
      @delete="deleteItem"
    ></contact-list>
    <contact-modal
      v-if="openModal"
      v-bind="item"
      :closeModal.sync="openModal"
      @save="saveItem"
    ></contact-modal>
  </div>
</template>
<script>
import Search from "./Search";
import ContactIcon from "./ContactIcon";
import ContactList from "./ContactList";
import ContactModal from "./ContactModal";

export default {
  name: "contact-page",
  components: {
    Search,
    ContactIcon,
    ContactList,
    ContactModal
  },
  data() {
    return {
      query: "",
      openModal: false,
      items: [],
      item: {}
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
  computed: {
    searchedItems() {
      if (!this.query) {
        return this.items;
      }
      return this.items.filter(item => {
        for (let fieldName in item) {
          if (
            fieldName != "id" &&
            item[fieldName].toLowerCase().includes(this.query)
          ) {
            return true;
          }
        }
        return false;
      });
      return matches;
    }
  },
  methods: {
    editItem(item) {
      this.item = item;
      this.openModal = true;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    searchItem(query) {
      this.query = query.toLowerCase();
    },
    saveItem(item) {
      this.openModal = false;
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-page {
  margin: 10px;
  background-color: var(--clr-body);
  display: inline-block;
  border-radius: 5px;

  h3 {
    width: 40%;
    text-align: center;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    align-items: flex-end;
  }
}
</style>
