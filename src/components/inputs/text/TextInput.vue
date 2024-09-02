<template>
  <BaseInput :input="input" :placeholder="placeholder" required type="text" />
</template>

<script setup lang="ts">
import BaseInput from "../common/BaseInput.vue";
import type IUseInput from "../hooks/IUseInput";

defineProps<TextInputProperties>();

interface TextInputProperties {
  input: IUseInput<string>;
  placeholder: string;
}
</script>
