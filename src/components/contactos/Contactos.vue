<template>
  <div class="contactos">
    <h3>Consulta de Contactos</h3>
    <open-modal></open-modal>
    <search></search>
    <listado-contactos :items="items"></listado-contactos>
  </div>
</template>
<script>
import OpenModal from "./OpenModal";
import Search from "./Search";
import ListadoContactos from "./ListadoContactos";

export default {
  name: "contactos",
  components: {
    OpenModal,
    Search,
    ListadoContactos
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
  }
};
</script>

<style lang="scss" scoped>
.contactos {
  margin: 10px;
  background-color: white;
  display: inline-block;

  h3 {
    width: 40%;
    text-align: center;
  }
}
</style>
