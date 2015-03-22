(function () {
    var gems =[
        {
            name: 'Mere',
            price: 6.90,
            canPurchase: true
        },
        {
            name: 'Prune',
            price: 6.30,
            canPurchase: true
        }
    ];
    var app = angular.module('gemStore', []);    
    app.controller("StoreController", function () {
            this.products = gems;
        });

}) ();