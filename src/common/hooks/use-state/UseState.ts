import { ref, type Ref } from "vue";

export default function useState<T>(
  initialValue: T,
): [state: Ref<T>, setState: (newState: T) => void] {
  const state = ref<T>(initialValue) as Ref<T>;

  const setState = (newState: T): void => {
    state.value = newState;
  };

  return [state, setState];
}
