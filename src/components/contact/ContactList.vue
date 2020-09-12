<template>
  <div class="contact-list">
    <table class="table">
      <thead>
        <tr>
          <th>Acciones</th>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>País</th>
          <th>Provincia</th>
          <th>Localidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td class="actions">
            <font-awesome-icon
              class="action-button"
              icon="eye"
              @click="$emit('edit', item)"
            ></font-awesome-icon>
            <font-awesome-icon
              class="action-button"
              icon="trash"
              @click="$emit('delete', index)"
            ></font-awesome-icon>
          </td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.telefono }}</td>
          <td>{{ item.direccion }}</td>
          <td>{{ item.pais }}</td>
          <td>{{ item.provincia }}</td>
          <td>{{ item.localidad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "contact-list",
  components: {
    FontAwesomeIcon
  },
  props: {
    query: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-list {
  display: flex;
  justify-content: center;
  margin: 10px;

  .table {
    border-collapse: collapse;
    text-align: left;

    td,
    th {
      border-bottom: 1px solid #ddd;
    }

    th {
      padding: 10px 25px;
    }

    td {
      padding-left: 40px;

      &.actions {
        padding: 15px;
      }
    }

    tbody {
      .action-button {
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
