import setSearchResult from "./setSearchResult.js";
import setMessage from "./setMessage.js";
import getMessage from "./getMessage.js";
import setLoadingState from "./setLoadingState .js";

const USER_API = "https://api.github.com/search/users?q=";

const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");

  const typeQuery = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("please fill out the search field");
    return;
  }

  setLoadingState(true);

  fetch(`${USER_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((respond) => setSearchResult(respond.items))
    .finally(() => setLoadingState(false));
};

export default performSearch;
