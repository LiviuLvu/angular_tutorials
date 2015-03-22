//dependency injection takes place here:  the 'invoice2' module depends on the 'finance2' module
angular.module('invoice2', ['finance2'])
//we now pass an array to the module.controller function, instead of a plain function. 
//The array first contains the names of the service dependencies that the controller needs. The last entry in the array is the controller constructor function
    .controller('InvoiceController', [ "currencyConverter", function (currencyConverter) {
// the InvoiceController has an argument named currencyConverter. By this, Angular knows about the dependency between the controller and the service and calls the controller with the service instance as argument
//Angular uses this array syntax to define the dependencies so that the DI also works after minifying the code, which will most probably rename the argument name of the controller constructor function to something shorter like a.
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;
        this.total = function total(outCurr) {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        };
    }]);