<template>
  <input :value="state" type="text" placeholder="input" @input="handleInput" />
</template>

<script setup lang="ts">
import useState from "./UseState";

const [state, setState] = useState<string>("");

const handleInput = (event: Event): void => {
  setState((event.target as HTMLInputElement).value);
};
</script>
