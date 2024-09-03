<template>
  <button class="button" :disabled="disabled" :type="type" @click="onClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<ButtonElementProperties>(), {
  type: "button",
});

export interface ButtonElementProperties {
  disabled?: boolean;
  onClick: (event: Event) => void;
  text: string;
  type?: "button" | "submit";
}
</script>
