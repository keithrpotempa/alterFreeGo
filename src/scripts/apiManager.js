import apiKey from "./apikey.js";
import refreshCards from './main.js';

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
        },
        saveName(nameObject){
            // If there's an id, the user is editing an existing card
            if (nameObject.id) {
                fetch(`${this.baseUrl}/${nameObject.id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(nameObject)
                }).then(refreshCards);
            // Otherwise, the user is saving a new card
            } else {
                fetch(`${this.baseUrl}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(nameObject)
                }).then(refreshCards)
            }
        }
    }
}

export default apiManager;
