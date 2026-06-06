
import {
  searchInput,
  buttonElement,
  userInputElement,
  cardsElements,
  formElement,
} from "./scripts/elements.js";

import performSearch from "./scripts/performSearch.js";

formElement?.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});
