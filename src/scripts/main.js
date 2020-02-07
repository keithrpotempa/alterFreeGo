import searchEventManager from './searchEventManager.js'
import cardDomManager from './cardDomManager.js';
import apiManager from './apiManager.js';
import cardEventManager from './cardEventManager.js'
import formDomManager from './formDomManager.js';

const refreshCards = () => {
    apiManager.json.getCards()
        .then(cardDomManager.renderCards)
        .then(cardEventManager.addDeleteEventListener)
        .then(cardEventManager.addEditEventListener);
}

const addAllFormEventListeners = () => {
    cardEventManager.addSaveEventListener()
    cardEventManager.addResetEventListener();
}

const addAllSearchEventListeners = () => {
    searchEventManager.addDomainSearchEventLister();
    searchEventManager.addNameGenSearchEventListener();
    // searchEventManager.addTwitterSearchEventListener();
}

refreshCards();
formDomManager.nameGen.formRender();
formDomManager.saveCard.formRender();
addAllFormEventListeners();
addAllSearchEventListeners(); 

export default refreshCards