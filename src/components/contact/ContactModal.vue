<template>
  <div class="contact-modal" @click="closeModal">
    <div class="icon-wrapper">
      <plus-icon></plus-icon>
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="modal-content">
      <h3>Nuevo Contacto - Complete los datos</h3>
      <form class="form" @submit="$emit('save', item)">
        <div class="row">
          <input type="text" placeholder="Tipo" v-model="item.tipo" />
          <input type="text" placeholder="Nombre" v-model="item.nombre" />
          <input type="text" placeholder="Apellido" v-model="item.apellido" />
        </div>
        <div class="row">
          <input
            class="large"
            type="text"
            placeholder="Telefono"
            v-model="item.telefono"
          />
          <input type="email" placeholder="Email" v-model="item.email" />
        </div>
        <div class="row">
          <input
            class="x-large"
            type="text"
            placeholder="Dirección"
            v-model="item.direccion"
          />
        </div>
        <div class="row">
          <input type="text" placeholder="Pais" v-model="item.pais" />
          <label class="country">Pais</label>
          <input type="text" placeholder="Provincia" v-model="item.provincia" />
          <input type="text" placeholder="Localidad" v-model="item.localidad" />
        </div>
        <div class="row two">
          <input type="text" placeholder="Fuente" v-model="item.fuente" />
          <input type="text" placeholder="Comercio" v-model="item.comercio" />
        </div>
        <div class="description">
          <label>Observaciones</label>
          <textarea v-model="item.observaciones"></textarea>
        </div>
        <button type="submit" class="btn bg-green">
          Guardar Contacto
        </button>
      </form>
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
    editItem: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      item: this.editItem
    };
  },
  methods: {
    closeModal(event) {
      if (event.target == this.$el) {
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-modal {
  position: fixed;
  z-index: 1;
  padding-top: 10vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .icon-wrapper {
    position: relative;
    margin: auto;
    padding: 2vh;
    max-width: 60vh;

    .plus-icon {
      top: 10px;
      left: 10px;
    }

    .close {
      color: #aaaaaa;
      font-size: 28px;
      font-weight: bold;
      position: absolute;
      top: 45px;
      right: 15px;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .modal-content {
    background-color: var(--clr-body);
    margin: auto;
    padding: 1vh 2vh;
    max-width: 60vh;
    text-align: right;

    h3 {
      font-weight: 200;
      text-align: center;
      width: 80%;
      margin-top: 10px;
    }

    .form {
      margin-top: 2vw;

      .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vw;
        position: relative;

        &.two input {
          flex-basis: 45%;
        }

        .country {
          position: absolute;
          bottom: 1vw;
          font-size: 12px;
        }
      }

      .description {
        text-align: left;
        width: 100%;

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 1vw;
        }

        textarea {
          width: 100%;
        }
      }

      input,
      textarea {
        outline: 0;
        border-width: 0 0 1px;

        &:focus {
          border-color: var(--clr-primary);
        }
      }

      input {
        border-color: #000;
        flex-basis: 30%;

        &.large {
          flex-basis: 65%;
        }

        &.x-large {
          flex-basis: 100%;
        }
      }

      textarea {
        border-style: solid;
      }

      .btn {
        margin-top: 2vw;
        border: 1px solid green;
        border-radius: 5px;
        padding: 0.5vw;
        color: var(--clr-body);
        cursor: pointer;

        &:focus {
          background-color: darkgreen;
        }
      }
    }
  }
}
</style>
