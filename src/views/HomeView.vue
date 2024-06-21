<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-bars" class="mr-2" />
    </template>

    <template #center>
      <Button icon="pi pi-palette" class="mr-2" />
    </template>

    <template #end>
      <Button icon="pi pi-moon" @click="toggleDark()" />
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
