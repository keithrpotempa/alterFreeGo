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
    saveCardFormRender(){
        const formContainer = document.querySelector(".div__form");
        let formHtml = this.formFactory();
        formContainer.innerHTML = formHtml;
    },
    formFactory() {
        return `
        <article id="save-card__form">
            <input type="hidden" id="entry-id" value="">
            <h2>New Name</h2>
            <form action="">
                <div class="row-forms">
                    <fieldset>
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" id="fname" placeholder="Enter first name...">
                    </fieldset>
                    <fieldset>
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" id="lname" placeholder="Enter last name..."></textarea>
                    </fieldset>  
                </div>
            </form>
            <div class="buttons">       
                <button class="save-button">Save</button>
                <button class="reset-button">Reset</button>
            </div>
        </article>
        `
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
