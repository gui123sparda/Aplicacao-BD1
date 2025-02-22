<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Dados do PostgreSQL</h1>
    <button @click="listarUsuarios" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">Listar Usuários</button>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nome }} - {{ usuario.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      usuarios: [],
    };
  },
  methods: {
    async listarUsuarios() {
      try {
        const response = await fetch('http://localhost:3000/api/usuarios');
        this.usuarios = await response.json();
      } catch (error) {
        console.error('Erro ao listar usuários:', error);
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
