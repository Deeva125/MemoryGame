// card objects
card1 = {
    id: "img1",
    side: "back",
    back: "backCard.png", selected: false,
    value: "2_of_clubs.png",
};

card2 = {
    id: "img2",
    side: "back",
    back: "backCard.png", selected: false,
    value: "2_of_diamonds.png",
};

card3 = {
    id: "img3",
    side: "back",
    back: "backCard.png", selected: false,
    value: "2_of_clubs.png",
};

card4 = {
    id: "img4",
    side: "back",
    back: "backCard.png", selected: false,
    value: "2_of_diamonds.png",
};

// cards array
cards = [card1, card2, card3, card4];

// trackers
let previousSelected = "none"
let currentSelected = "none"
let cardsFlipped = 0
let totalGuesses = 0
let rightGuesses = 0
let wrongGuesses = 0

function flipCard(cardId) {
    flipSelectedCardToFront(cardId)
    cardsFlipped++;
    totalGuesses++;
    // for first card of tha pair.
    if (cardsFlipped % 2 != 0) {
        previousSelected = getCardById(cardId)
    }
    // for second card of the pair
    else {
        currentSelected = getCardById(cardId)
        if (previousSelected === currentSelected) {
            console.log("Keep going")
            rightGuesses++;
        }
        else {
            wrongGuesses++;
            setTimeout(() => {
                flipAllCardToBack()
            }, 1000);
        }
    }
    updateScore()
}

function updateScore(){
    document.getElementById("totalGuesses").innerText=totalGuesses
    document.getElementById("rightGuesses").innerText=rightGuesses
    document.getElementById("wrongGuesses").innerText=wrongGuesses
}

function getCardById(cardId) {
    for (let i = 0; i < cards.length; i++) {
        if (cardId == cards[i]["id"]) {
            return cards[i]["value"];
        }
    }
}

function flipSelectedCardToBack(cardId) {
    for (let i = 0; i < cards.length; i++) {
        if (cardID == cards[i]["id"]) {
            document.getElementById(cardID).src = "Cards/" + cards[i]["value"];
        }
    }
}

function flipSelectedCardToFront(cardId) {
    for (let i = 0; i < cards.length; i++) {
        if (cardId == cards[i]["id"]) {
            document.getElementById(cards[i]["id"]).src = "Cards/" + cards[i]["value"];
        }
    }
}

function flipAllCardToFront() {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById(cards[i]["id"]).src = "Cards/" + cards[i]["value"];
    }
}

function flipAllCardToBack() {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById(cards[i]["id"]).src = "backCard.png";
    }
}

function start() {
    flipAllCardToFront()
    setTimeout(() => {
        flipAllCardToBack()
    }, 1000);
}