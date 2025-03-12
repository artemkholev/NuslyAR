import { renderHeader } from "../widgets/header/index.js";
import { renderMain } from "../widgets/main/index.js";
import { renderFooter } from "../widgets/footer/index.js";

export const app = document.getElementById("app");

if (app) {
  app.appendChild(renderHeader());
  app.appendChild(renderMain());
  app.appendChild(renderFooter());
} else {
  console.error("Element with ID 'app' not found in the DOM.");
}
