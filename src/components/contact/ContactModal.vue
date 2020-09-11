<template>
  <div class="contact-modal">
    <div class="modal-content">
      <plus-icon></plus-icon>
      <span class="close" @click="$emit('update:closeModal', false)"
        >&times;</span
      >
      <div class="form">
        <input type="text" name="Nombre" :value="nombre" />
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from "./PlusIcon";

export default {
  name: "contact-modal",
  components: {
    PlusIcon
  },
  props: {
    id: {
      type: Number,
      required: false
    },
    tipo: {
      type: String,
      required: false
    },
    nombre: {
      type: String,
      required: false
    },
    apellido: {
      type: String,
      required: false
    },
    telefono: {
      type: String,
      required: false
    },
    direccion: {
      type: String,
      required: false
    },
    pais: {
      type: String,
      required: false
    },
    provincia: {
      type: String,
      required: false
    },
    localidad: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-modal {
  position: fixed;
  z-index: 1;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: right;

    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      align-self: stretch;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
