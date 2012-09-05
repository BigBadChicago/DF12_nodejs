
//**** blocking I/O style JavaScript
//**** synchronous
var nforce = require('nforce');
var oauth;

var soqlQuery = 'SELECT Id, Name, Type, BillingStreet, BillingCity, BillingState, BillingPostalCode FROM Account ORDER BY CreatedDate DESC';
var result = nforce.query(soqlQuery, oauth);
//****  Does not occur until result is assigned
for(var i=0;i<length;i++) {
	var row = result.rows[i];
	//do something with the row
	};

console.log('I will NOT be displayed before the row variable is assigned');
	
	
	
	