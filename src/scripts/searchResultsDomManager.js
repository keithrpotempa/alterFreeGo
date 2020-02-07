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
    }
}

export default searchResultsDomManager;