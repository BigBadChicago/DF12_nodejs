
//**** non-blocking I/O style JavaScript
//**** asynchronous with callback & error handling
var nforce = require('nforce');
var oauth;

var soqlQuery = 'SELECT Id, Name, Type, BillingStreet, BillingCity, BillingState, BillingPostalCode FROM Account ORDER BY CreatedDate DESC';
nforce.query(soqlQuery, oauth, function(err, response) {
    if(err) {
        return console.log(err);
    } else {
        for(var i=0;i<length;i++) {
        var row = response.records[i];
        //do something with the row
        }
    }    
});

console.log('I will be displayed before the row variable is assigned');