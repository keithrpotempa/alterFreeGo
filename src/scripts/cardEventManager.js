import apiManager from "./apiManager.js";
import cardDomManager from "./cardDomManager.js";
import formDomManager from "./formDomManager.js";

const cardEventManager = {
    addSaveEventListener() {
        const saveBtn = document.querySelector(".save-button");
        const entryId = document.querySelector("#entry-id").value;
        saveBtn.addEventListener("click", () => {
            const cardObject = cardDomManager.makeCardObject();
            apiManager.json.saveCard(cardObject)
        })
    },
    addDeleteEventListener() {
        const deleteBtns = document.querySelectorAll(".delete-button");
        deleteBtns.forEach(btn => {
            const btnId = btn.id.split("--")[1]
            btn.addEventListener("click", () => {
                apiManager.json.deleteCard(btnId);
            })
        })
    },
    addEditEventListener(){
        const editBtns = document.querySelectorAll(".edit-button");
        editBtns.forEach(btn => {
            const btnId = btn.id.split("--")[1]
            btn.addEventListener("click", (e) => {
                const entryId = e.target.id.split("--")[1]
                apiManager.json.getCard(entryId)
                    .then(apiManager.json.editCard)                
            })
        })
    },
    addResetEventListener(){
        const resetBtn = document.querySelector(".reset-button");
        resetBtn.addEventListener("click", () => {
            formDomManager.clearForm();
        })
    }
}

export default cardEventManager