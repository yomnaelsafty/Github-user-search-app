import { loadingElement } from "./elements.js";
import setSearchResult from "./setSearchResult.js";

export default function (loadingState) {
  loadingElement.classList.toggle("hidden", !loadingState);
  loadingState && setSearchResult(null);
}
