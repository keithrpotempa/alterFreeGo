import apiKey from "./apikey.js";

const apiManager = {
    domains: {
        baseUrl: "https://domain-availability-api.whoisxmlapi.com/api/v1?" ,
        search(searchCriteria) {
            const criteria = encodeURIComponent(`${searchCriteria}.com`);
            const url = `${this.baseUrl}apiKey=${apiKey}&domainName=${criteria}`;
            return fetch(url).then(resp => resp.json());
        }
    },
    json: {
        baseUrl: "http://localhost:8088/names",
        getCards() {
            return fetch(this.baseUrl).then(resp => resp.json());
        }
    }
};

export default apiManager;
