const apiBaseUrl = "https://domain-availability-api.whoisxmlapi.com/api/v1?";

const apiManager = {
  search(searchCriteria) {
    const criteria = encodeURIComponent(`${searchCriteria}.com`);
    const url = `${apiBaseUrl}apiKey=${apiKey}&domainName=${criteria}`;
    return fetch(url).then(resp => resp.json());
  }
};