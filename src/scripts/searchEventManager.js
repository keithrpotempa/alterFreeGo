import apiManager from './apiManager.js'
import searchResultsDomManager from './searchResultsDomManager.js'

const searchEventManager = {
    addDomainSearchEventLister() {
        const btn = document.getElementById("domain-search-btn");
        btn.addEventListener("click", () => {
            const input = document.getElementById("domain-search-criteria");
            const searchCriteria =  input.value;
            const searchResultsPromise = apiManager.domains.search(searchCriteria);
            searchResultsPromise.then(searchResults => {
                searchResultsDomManager.domain.renderSearchResults(searchResults)
            });
        });
    },
    addTwitterSearchEventLister() {
        const btn = document.getElementById("twitter-search-btn");
        btn.addEventListener("click", () => {
            const input = document.getElementById("twitter-search-criteria");
            const searchCriteria =  input.value;
            // TODO: Update this:
            // const searchResultsPromise = apiManager.domains.search(searchCriteria);
            // searchResultsPromise.then(searchResults => {
            // TODO: Change to searchResults when API working
                searchResultsDomManager.twitter.renderSearchResults(searchCriteria)
            // });
        });
    }
}

export default searchEventManager;