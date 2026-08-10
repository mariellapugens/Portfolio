import {
  renderFacts,
  renderChallenges,
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
    renderChallenges();
    renderStack();
    initNavigation();
    renderCertifications();

  }
);