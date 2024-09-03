<template>
  <form>
    <fieldset>
      <legend>{{ legend }}</legend>
      <slot></slot>
    </fieldset>
    <ButtonElement
      type="submit"
      :disabled="disableSubmit"
      text="Submit"
      @click="handleSubmit"
    />
  </form>
</template>

<script setup lang="ts">
import { ButtonElement } from "@/components";

const properties = defineProps<InputFormProperties>();

export interface InputFormProperties {
  disableSubmit: boolean;
  legend?: string;
  submit: () => void;
}

const handleSubmit = (event: Event): void => {
  properties.submit();

  event.preventDefault();
};
</script>
