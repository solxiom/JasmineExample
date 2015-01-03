/**
 * Created by kavan on 3.1.2015.
 */
describe('expensesDataServiceSpec', function () {

    beforeEach(module('app'));

    it("should return three expense items", inject(function (expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);

    }));

    it("should return taxi expense", inject(function (expensesDataService) {
        var expenseItems = expensesDataService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);
        expect(expenseItems).toContain(testExpenseItem);
    }));

    describe('reasonable expenses', function () {
        var taxi, dinner;
        beforeEach(function () {
            jasmine.addMatchers({
                toBeAReasonableExpense: function () {
                    return {
                        compare: function (actual) {
                            var pass = actual.isReasonable();
                            var judgement = pass ? "unreasonable" : "reasonable";

                            return {
                                pass: pass,
                                message: "Expected expense to be a " + judgement + " expense."
                            }
                        }
                    };
                }
            });
        });
        beforeEach(function () {
            taxi = new ExpenseItem('Taxi', 'To airport', 89.95);
            dinner = new ExpenseItem('Dinner', 'goo food', 139.95);
        })

        it("taxi should be a reasonable expanse", function () {
            expect(taxi).toBeAReasonableExpense()

        });
        it("dinner should not be a reasonable expanse", function () {

            expect(dinner).not.toBeAReasonableExpense()

        });

    });


});