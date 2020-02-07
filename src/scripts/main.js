import searchEventManager from './searchEventManager.js'
import cardDomManager from './cardDomManager.js';
import apiManager from './apiManager.js';
import cardEventManager from './cardEventManager.js'

const refreshCards = () => {
    apiManager.json.getCards()
        .then(cardDomManager.renderCards)
        .then(cardEventManager.addSaveEventListener)
        .then(cardEventManager.addDeleteEventListener)
        .then(cardEventManager.addEditEventListener);
}

refreshCards();
cardDomManager.saveCardFormRender();
cardEventManager.addResetEventListener();
searchEventManager.addSearchEventLister();

export default refreshCards