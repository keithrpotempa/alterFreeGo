import searchEventManager from './searchEventManager.js'
import cardDomManager from './cardDomManager.js';
import apiManager from './apiManager.js';

const refreshCards = () => {
    apiManager.json.getCards()
        .then(cardDomManager.renderCards)
}

refreshCards();
searchEventManager.addSearchEventLister();