import apiKey from "./apikey.js";
import refreshCards from './main.js';
import formDomManager from "./formDomManager.js";

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
        getCard(id) {
            return fetch(`${this.baseUrl}/${id}`).then(resp => resp.json());
        },
        saveCard(nameObject){
            // If there's an id, the user is editing an existing card
            if (nameObject.id) {
                fetch(`${this.baseUrl}/${nameObject.id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(nameObject)
                }).then(formDomManager.clearForm).then(refreshCards);
            // Otherwise, the user is saving a new card
            } else {
                fetch(`${this.baseUrl}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(nameObject)
                }).then(formDomManager.clearForm).then(refreshCards)
            }
        },
        editCard (card) {
            document.querySelector("#entry-id").value = card.id;
            document.querySelector("#fname").value = card.fname;
            document.querySelector("#lname").value = card.lname;
        },
        deleteCard(id) {
            return fetch(`${this.baseUrl}/${id}`, {method: "DELETE"})
                .then(refreshCards)
        }
    }
}

export default apiManager;
