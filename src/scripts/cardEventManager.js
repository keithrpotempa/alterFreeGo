import apiManager from "./apiManager.js";
import cardDomManager from "./cardDomManager.js";

const cardEventManager = {
    addSaveEventListener() {
        const saveBtn = document.querySelector(".save-button");
        const entryId = document.querySelector("#entry-id").value;
        saveBtn.addEventListener("click", () => {
            const cardObject = cardDomManager.makeCardObject();
            apiManager.json.saveName(cardObject)
        })
    },
    addDeleteEventListener() {
        const deleteBtns = document.querySelectorAll(".delete-button");
        deleteBtns.forEach(btn => {
            const btnId = btn.id.split("--")[1]
            btn.addEventListener("click", () => {
                apiManager.json.deleteName(btnId);
            })
        })
    }
}

export default cardEventManager