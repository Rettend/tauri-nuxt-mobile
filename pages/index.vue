<script lang="ts" setup>
// https://nuxt.com/docs/guide/directory-structure/pages

import { invoke } from '@tauri-apps/api/primitives'

// this should auto-import but ˇ^ˇ
import { ref } from '#imports'

const greet = ref<HTMLDivElement>()
const name = ref('Anon')
const toggle = ref(false)

async function greetUser() {
  if (!greet.value)
    return

  const text = await invoke<string>('greet', { name: name.value })

  if (toggle.value)
    greet.value.textContent = `Hello, ${name.value}`
  else
    greet.value.textContent = text

  toggle.value = !toggle.value
}
</script>

<template>
  <div body>
    <div
      ref="greet"
      m-a w-fit cursor-pointer p-5 text-2xl
      :font="toggle ? 'bold' : ''"
      @click="greetUser"
    >
      Hello, {{ name }}
    </div>
    <NuxtWelcome />
  </div>
</template>
