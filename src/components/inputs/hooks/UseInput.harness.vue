<template>
  <h1>{{ isValid }}</h1>
  <input
    placeholder="myInput"
    required
    type="text"
    :value="state"
    @input="updateState"
  />
</template>

<script setup lang="ts">
import useInput from "./UseInput";

const { isValid, state, updateState } = useInput<string>(
  "myState",
  (value) => value,
);
</script>
