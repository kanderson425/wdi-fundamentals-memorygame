console.log("Up and running!");


var cards = [
{
	suit: 'hearts',
	rank: 'queen',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	//if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");

} else {
	alert("Sorry, try again.");
	};
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	//console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		//cardsInPlay = [];

	};

}
	//console.log(cards[0].cardImage);
	//console.log(cards[0].suit);
	//console.log(cards[2].cardImage);
	//console.log(cards[2].suit);

//if(cardsInPlay.length === 2) {
	//if (cardsInPlay[0] === cardsInPlay[1]) {
		//alert("You found a match!");
	//} else alert("Sorry, try again!");
//}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
	 document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

//Game Reset Button & Functions
var reset = function() {
	alert('Game has been reset!');
};
var button = document.querySelector('button');
button.addEventListener('click', reset);






