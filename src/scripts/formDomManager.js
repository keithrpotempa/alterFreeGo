const formDomManager = {
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
    saveCardFormRender(){
        const formContainer = document.querySelector(".div__form");
        let formHtml = formDomManager.formFactory();
        formContainer.innerHTML = formHtml;
    },
    clearForm() {
        document.querySelector("#entry-id").value = "";
        document.querySelector("#fname").value = "";
        document.querySelector("#lname").value = "";
    }
}

export default formDomManager;