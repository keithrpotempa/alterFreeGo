import searchEventManager from './searchEventManager.js'
import cardDomManager from './cardDomManager.js';
import apiManager from './apiManager.js';
import cardEventManager from './cardEventManager.js'

const refreshCards = () => {
    apiManager.json.getCards()
        .then(cardDomManager.renderCards)
        .then(cardEventManager.addSaveEventListener)
}

refreshCards();
cardDomManager.saveCardFormRender();
searchEventManager.addSearchEventLister();

export default refreshCards