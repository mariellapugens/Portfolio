import {
  renderFacts,
  renderProjects,
  renderStack,
  renderCertifications
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
    renderCertifications();

  }
);