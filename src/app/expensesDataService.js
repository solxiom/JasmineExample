/**
 * Created by kavan on 3.1.2015.
 */
(function () {
    'use strict';

    angular.module('app').factory("expensesDataService", ['$http', expensesDataService]);

    function expensesDataService($http) {

        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        function getExpenses() {
            return [
                new ExpenseItem('Taxi','To airport', 89.95),
                new ExpenseItem('Lunch','At airport',15.40),
                new ExpenseItem('Coffee','Starbucks', 4.93)
            ]
        }
         function persistExpenses(success){
             //do some work

             var done = true;
             if(done){
                 success();
             }
         }
    }

})();