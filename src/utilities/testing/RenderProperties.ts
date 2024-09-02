import type { RenderOptions } from "@testing-library/vue";

export default function renderProperties<T extends object>(
  properties: T,
): RenderOptions<unknown> {
  return { props: properties };
}
