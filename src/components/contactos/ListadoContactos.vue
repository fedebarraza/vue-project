<template>
  <div class="listado-contactos">
    <table class="table table-hover text-nowrap">
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
          <td><a href="#">Ver</a> | <a href="#">Borrar</a></td>
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
export default {
  name: "listado-contactos"
};
</script>

<style scoped>
.listado-contactos {
  display: flex;
  justify-content: center;
  margin: 20px 10px;
}
</style>
