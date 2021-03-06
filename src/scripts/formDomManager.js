import nameRegions from './nameRegionList.js';

const formDomManager = {
    saveCard: {
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
        formRender(){
            const formContainer = document.querySelector(".div__form");
            let formHtml = formDomManager.saveCard.formFactory();
            formContainer.innerHTML = formHtml;
        },
        clearForm() {
            document.querySelector("#entry-id").value = "";
            document.querySelector("#fname").value = "";
            document.querySelector("#lname").value = "";
        }
    },
    nameGen: {
        formFactory(){
            let regionsHtml = ""
            nameRegions.forEach(region => {
                regionsHtml += this.makeRegionOption(region);
            });
    
            return `
            <article id="namegen-search" class="search__article">
            <h1>Name Generator</h1>
            <fieldset>
                <label for="nameGen-numOf">Number of Names</label>
                <select name="nameGen-numOf" id="nameGen-numOf">
                    <option value="nameGen-numOf__10">10</option>
                    <option value="nameGen-numOf__50">50</option>
                    <option value="nameGen-numOf__100">100</option>
                    <option value="nameGen-numOf__250">250</option>
                    <option value="nameGen-numOf__500">500</option>
                </select> 
            </fieldset>
            <fieldset>
                <label for="female">Female</label>
                <input type="radio" name="nameGen_gender__button" id="nameGen__female" value="female">
                <label for="male">Male</label>
                <input type="radio" name="nameGen_gender__button" id="nameGen__male" value="male">
            </fieldset>
            <fieldset>
                <label for="nameGen-region">Region</label>
                <select name="nameGen-region" id="nameGen-region">
                    ${regionsHtml}
                </select> 
            </fieldset>
            <button id="namegen-search-btn">Search</button>
        </article>
        `
        },
        formRender () {
            const formContainer = document.querySelector("#nameGen-search-container");
            let formHtml = formDomManager.nameGen.formFactory();
            formContainer.innerHTML = formHtml;
        },
        makeRegionOption (region) {
            return `<option value="nameGen-region__${region}">${region}</option>
            `
        }

    }
}

export default formDomManager;