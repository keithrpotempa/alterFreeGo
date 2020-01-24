const searchResultsDomManager = {
    resultFactory(result) {
        return `
        <article class="card">
            <p><strong>Availability:</strong> ${result.DomainInfo.domainName}</p>
            <p><strong>Domain:</strong> ${result.DomainInfo.domainAvailability}</p>
        </article>
        `
        
    }

    renderSearchResults(searchResults) {
        const results = document.getElementById("search-results");
        this.resultFactory(searchResults);
    }
}