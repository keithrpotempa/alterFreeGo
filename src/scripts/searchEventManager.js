const searchEventManager = {
    addSearchEventLister() {
        const btn = document.getElementById("search-btn");
        btn.addEventListener("click", () => {
            const input = document.getElementById("search-criteria");
            const searchCriteria =  input.value;
            const searchResultPromise = apiManager.search(searchCriteria);
            searchResultsPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults)
            });
        });
    }
}
