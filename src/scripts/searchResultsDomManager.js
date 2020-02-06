const searchResultsDomManager = {
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
}

export default searchResultsDomManager;