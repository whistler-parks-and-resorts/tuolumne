<template>
  <BaseInput :input="input" placeholder="myInput" required type="text" />
</template>

<script setup lang="ts">
import useTextInput from "../text/UseTextInput";
import BaseInput from "./BaseInput.vue";

const input = useTextInput("defaultValue");
</script>
