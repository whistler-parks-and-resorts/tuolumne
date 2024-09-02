import type IUseInput from "../hooks/IUseInput";
import useInput from "../hooks/UseInput";

export default function useTextInput(
  initialInput: string = "",
): IUseInput<string> {
  return useInput(initialInput, (value) => value);
}
