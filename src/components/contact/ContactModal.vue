<template>
  <div class="contact-modal">
    <div class="modal-content">
      <plus-icon></plus-icon>
      <span class="close" @click="$emit('update:closeModal', false)"
        >&times;</span
      >
      <div class="form">
        <div class="row">
          <input type="text" name="Tipo" :value="tipo" />
          <input type="text" name="Nombre" :value="nombre" />
          <input type="text" name="Apellido" :value="apellido" />
        </div>
        <div class="row">
          <input class="grow-2" type="text" name="Telefono" :value="telefono" />
          <input class="grow-0" type="email" name="Email" :value="email" />
        </div>
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

    .form {
      margin-top: 10px;
      align-self: stretch;

      .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 10px;

        .grow-1 {
          flex-grow: 1;
        }

        .grow-2 {
          flex-grow: 2;
        }
      }

      input {
        outline: 0;
        border-width: 0 0 1px;
        border-color: #000;
        padding-bottom: 5px;

        &:focus {
          border-color: lightgray;
        }
      }
    }
  }
}
</style>
