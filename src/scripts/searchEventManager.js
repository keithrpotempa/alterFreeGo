import apiManager from './apiManager.js'
import searchResultsDomManager from './searchResultsDomManager.js'

const searchEventManager = {
    addSearchEventLister() {
        const btn = document.getElementById("search-btn");
        btn.addEventListener("click", () => {
            const input = document.getElementById("search-criteria");
            const searchCriteria =  input.value;
            const searchResultsPromise = apiManager.domains.search(searchCriteria);
            searchResultsPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults)
            });
        });
    }
}

export default searchEventManager;