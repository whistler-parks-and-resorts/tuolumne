import type { Ref } from "vue";
import type { InputType } from "../common/InputType";
import type IValid from "./IValid";

export default interface IUseInput<T extends InputType> extends IValid {
  state: Ref<T>;
  updateState: (event: Event) => void;
}
