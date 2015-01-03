/**
 * Created by kavan on 4.1.2015.
 */
describe('persisting expenses', function () {

    beforeEach(module('app'));

    describe('call backs', function () {
        it("should call back when persisted", inject(function (expensesDataService) {
            var spyCallBack = jasmine.createSpy('callbackSpy');//the createSpy String parameter is just for sake of documentation
            expensesDataService.persistExpenses(spyCallBack);
            expect(spyCallBack).toHaveBeenCalled();
        }));
    });


    describe('spy on', function () {
        it("should spy on persistExpenses", inject(function (expensesDataService) {
            var spy = spyOn(expensesDataService,"persistExpenses");
            expensesDataService.persistExpenses();
            expect(spy).toHaveBeenCalled();
        }));
        it("should spy on persistExpenses and fake reply", inject(function (expensesDataService) {
            var spy = spyOn(expensesDataService,"persistExpenses").and.callFake(function(){
                return 3;
            });
            var numRecordsPersisted = expensesDataService.persistExpenses();
            expect(numRecordsPersisted).toEqual(3);
        }));
    });



});