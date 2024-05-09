
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import { buildDirectiveArgs } from '@vue/compiler-core';
import NavMenu from '@/views/NavMenu.vue';

</script>
<template>
  <NavMenu/>
  <RouterView class="rooterView" />
</template>
