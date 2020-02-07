const cardDomManager = {
    cardFactory(card) {
        return `
            <article class="card">
                <p><strong>First Name:</strong> ${card.fname} </p>
                <p><strong>Last Name:</strong> ${card.lname} </p>
                <div class="card-buttons__div">
                    <button class="delete-button" id="delete-button--${card.id}">DELETE</button>
                    <button class="edit-button" id="edit-button--${card.id}">EDIT</button>
                </div>
            </article>
            `;
        },
    renderCards(cards) {
        const cardsContainer = document.getElementById("cards-container");
        cardsContainer.innerHTML = "<h2>Names</h2>"
        cards.forEach(card => {
            let cardHtml = cardDomManager.cardFactory(card);
            cardsContainer.innerHTML += cardHtml;
        });
    },
    makeCardObject(){
        let id = document.querySelector("#entry-id").value
        let fname = document.querySelector("#fname").value
        let lname = document.querySelector("#lname").value

        return {
            "id": id,
            "fname": fname,
            "lname": lname
        }
    }
};

export default cardDomManager;
