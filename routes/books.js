var express = require('express');
var router = express.Router();
var books = [{
		id: 1,
		title: 'Book 1',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-29T00:00:00.000Z'
	}, {
		id: 2,
		title: 'Book 2',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 2,
		title: 'Book 2',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 3,
		title: 'Book 3',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 4,
		title: 'Book 4',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 5,
		title: 'Book 5',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 6,
		title: 'Book 6',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 7,
		title: 'Book 7',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 8,
		title: 'Book 8',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 9,
		title: 'Book 9',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 10,
		title: 'Book 10',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, {
		id: 11,
		title: 'Book 11',
		bookType: 'Hard Cover',
		price: 9.50,
		onHand: 20,
		display: 7,
		orderPoint: 10,
		orderQuantity: 20,
		lastUpdated: '2017-01-30T00:00:00.000Z'
	}, 
];

function bookByID(element) {
		return element.id == this.id
}
/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send(JSON.stringify(books, 0, 2));
});

router.post('/', function (req, res, next) {
	res.send("New Book Created Successfully");
});

router.get('/:bookID', function (req, res, next) {
	// res.send("Book ID is: " + req.params.bookID);
	res.send(JSON.stringify(books.find(bookByID,{id: req.params.bookID}), 0, 2));
});

module.exports = router;
