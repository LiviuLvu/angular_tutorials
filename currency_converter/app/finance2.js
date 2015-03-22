//When the application grows it is a good practice to move view independent logic from the controller into a so called "service" 
angular.module('finance2', [])
//controllers are created using a factory function
    .factory('currencyConverter', function () {
        // this is data independent of view: currencies data "service"
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
    // this is data independent of view: convertion function "service"
        var convert = function (amount, inCurr, outCurr) {
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        };
    //Tese "services" can be reused by other parts of the application as well.
        return {
            currencies: currencies,
            convert: convert
        };
    });
