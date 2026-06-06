import { cardsElements } from "./elements.js";

const setSearchResult = (data) => {
  let result = "";

  if (data?.length === 0) {
    result = "<p>No results found.</p>";
  } else if (data === null) {
    result = "";
  } else if (data?.length) {
    result = data.map((item) => `
	    <article class ="card">
	       <img class ="img" loading ="lazy" src="${item.avatar_url}"/>
	       <h2 class ="name"> ${item.login}</h2>
	    </article>
	    `).join('');
  }

  cardsElements.innerHTML = result;
};

export default setSearchResult;
