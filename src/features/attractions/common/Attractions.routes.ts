import type { RouteRecordRaw } from "vue-router";
import AddAttractionContainer from "../add/AddAttraction.container.vue";

export const attractionsHome = "attractions";

export default function attractionRoutes(): Array<RouteRecordRaw> {
  return [
    {
      name: attractionsHome,
      component: AddAttractionContainer,
      path: `/${attractionsHome}`,
    },
  ];
}
