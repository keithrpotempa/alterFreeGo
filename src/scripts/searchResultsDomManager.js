const searchResultsDomManager = {
    domain: {
        resultFactory(result) {
            return `
            <article class="domain-search-result">
                <p><strong>Availability:</strong> ${result.DomainInfo.domainName}</p>
                <p><strong>Domain:</strong> ${result.DomainInfo.domainAvailability}</p>
            </article>
            `
        },
        // TODO: this could probably be shifted to a greater scope,
        // since it's repeated elsewhere in this file
        renderSearchResults(searchResults) {
            const results = document.getElementById("search-results");
            results.innerHTML = this.resultFactory(searchResults);
        }
    },
    twitter: {
        resultFactory(result) {
            //TODO: Fix placeholder when Twitter API manager is working
            return `
            <article class="domain-search-result">
                <p><strong>Availability:</strong> PLACEHOLDER </p>
                <p><strong>Domain:</strong> PLACEHOLDER </p>
            </article>
            `
        },
        renderSearchResults(searchResults) {
            const results = document.getElementById("search-results");
            results.innerHTML = this.resultFactory(searchResults);
        }
    },
    nameGen: {
        resultFactory(result) {
            return `
            <article class="namegen-search-result">
                <p><strong>First Name:</strong> ${result.name} </p>
                <p><strong>Last Name:</strong> ${result.surname} </p>
            </article>
            `
        },
        renderResults(results) {
            const resultsContainer = document.getElementById("search-results");
            resultsContainer.innerHTML = "<h2>Name Results</h2>"
            results.forEach(result => {
                resultsContainer.innerHTML += this.resultFactory(result);                
            });
        }
    }
}

export default searchResultsDomManager;