<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">📋 Lista de Usuários</h1>
      <button @click="listarUsuarios" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4">
        Listar Usuários
      </button>
      <ul class="space-y-2">
        <li v-for="usuario in usuarios" :key="usuario.id" class="p-3 bg-gray-50 rounded-lg shadow">
          <span class="font-semibold">{{ usuario.nome }}</span> - {{ usuario.email }}
        </li>
      </ul>
    </div>
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

<style src="./output.css"></style>
