import { useState } from "@/common";
import type IUseInput from "./IUseInput";
import type { InputType } from "../common/InputType";

export default function useInput<T extends InputType>(
  initialState: T,
  conversionFunction: (input: string) => T,
): IUseInput<T> {
  const [state, setState] = useState<T>(initialState);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [, setIsDirty] = useState<boolean>(false);

  const updateState = (event: Event): void => {
    const element = event.target as HTMLInputElement;

    setIsDirty(true);
    setIsValid(element.validity.valid);
    setState(conversionFunction(element.value));
  };

  return { isValid, state, updateState };
}
