import './styles.css';
import {
  searchInput,
  buttonElement,
  userInputElement,
  cardsElements,
} from "./scripts/elements.js";

import performSearch from "./scripts/performSearch.js";

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});
