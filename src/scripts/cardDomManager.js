const cardDomManager = {
  cardFactory(object) {
    return `
        <article class="card">
            <p><strong>First Name:</strong> ${object.fname} </p>
            <p><strong>Last Name:</strong> ${object.lname} </p>
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
  }
};

export default cardDomManager;
