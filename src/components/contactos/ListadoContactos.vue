<template>
  <div class="listado-contactos">
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
        <tr>
          <td class="actions">
            <font-awesome-icon
              class="action-button"
              icon="eye"
            ></font-awesome-icon>
            <font-awesome-icon
              class="action-button"
              icon="trash"
            ></font-awesome-icon>
          </td>
          <td>Ingeniero</td>
          <td>Jorge</td>
          <td>Miller</td>
          <td>0303456</td>
          <td>San Juan 315</td>
          <td>Argentina</td>
          <td>Buenos Aires</td>
          <td>Ramos Mejia</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "listado-contactos",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.listado-contactos {
  display: flex;
  justify-content: center;
  margin: 20px 10px;

  .table {
    border-collapse: collapse;
    text-align: left;

    td,
    th {
      border-bottom: 1px solid #ddd;
    }

    th {
      padding: 25px;
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
