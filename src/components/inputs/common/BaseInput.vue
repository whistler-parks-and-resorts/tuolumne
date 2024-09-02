<template>
  <input
    :placeholder="placeholder"
    :required="required"
    :type="type"
    :value="input.state.value"
    @change="input.updateState"
    @focus="input.updateState"
    @input="input.updateState"
  />
</template>

<script setup lang="ts">
import type IUseInput from "../hooks/IUseInput";
import type { InputType } from "./InputType";

defineProps<BaseInputProperties>();

interface BaseInputProperties {
  input: IUseInput<InputType>;
  placeholder: string;
  required?: boolean;
  type: string;
}
</script>
