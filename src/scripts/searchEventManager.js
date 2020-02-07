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
    addTwitterSearchEventListener() {
        const btn = document.getElementById("twitter-search-btn");
        btn.addEventListener("click", () => {
            const input = document.getElementById("twitter-search-criteria");
            const searchCriteria =  input.value;
            // FIXME: Update this:
            // const searchResultsPromise = apiManager.domains.search(searchCriteria);
            // searchResultsPromise.then(searchResults => {
            // FIXME: Change to searchResults when API working
                searchResultsDomManager.twitter.renderSearchResults(searchCriteria)
            // });
        });
    },
    addNameGenSearchEventListener() {
        const btn = document.getElementById("namegen-search-btn");
        btn.addEventListener("click", () => {
            const numberOfNames = document.getElementById("nameGen-numOf").value.split("__")[1];
            const femaleRadio = document.getElementById("nameGen__female");
            // TODO: add a "random" gender button
            // const maleRadio = document.getElementById("nameGen__male");
            let region = "United States"
            let gender = (femaleRadio.checked) ? "female" : "male";

            console.log("I'll search for", numberOfNames, "names of", gender, "gender from", region, "region")
            const nameResultsPromise = apiManager.nameGen.search(numberOfNames, gender, region);
            nameResultsPromise.then(nameResults => {
                searchResultsDomManager.nameGen.renderResults(nameResults)
            });
        });
    }
}

export default searchEventManager;