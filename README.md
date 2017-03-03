# NodeJetTemplate
Basic Template for trying various JET approaches

## Basic Structure
This template is created with the express generator.  The JET-Template-Web-NavBar template has been extracted to the public/ folder.


## Data Services

URL | Method | Description
----------------------| ------------- | ----------------------------------------------
/books | GET | provides an array of Book objects
/books/{id} | GET | provides a single book object with the Book ID of {id}


### Sample Book Object (in JSON)
        {
		    id: 1,
		    title: 'Book 1',
		    bookType: 'Hard Cover',
		    price: 9.50,
		    onHand: 20,
		    display: 7,
		    orderPoint: 10,
		    orderQuantity: 20,
		    lastUpdated: '2017-01-29T00:00:00.000Z'
	    }
		
		