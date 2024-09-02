// This is so eslint-typescript knows about .vue files for typed linting correctly.
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
