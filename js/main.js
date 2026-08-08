import {
  renderFacts,
  renderProjects,
  renderStack
} from "./render.js";

import {
  initNavigation
} from "./navigation.js";

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFacts();
    renderProjects();
    renderStack();

    initNavigation();

  }
);