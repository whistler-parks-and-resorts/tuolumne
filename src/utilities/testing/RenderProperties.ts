import type { RenderOptions } from "@testing-library/vue";

/**
 * Utility function to pass properties to a component for testing.
 * Unknown type is required.
 * @param properties The component properties object for the test.
 * @returns A RenderOptions objects for testing purposes.
 */
export default function renderProperties<T extends object>(
  properties: T,
): RenderOptions<unknown> {
  return { props: properties };
}
