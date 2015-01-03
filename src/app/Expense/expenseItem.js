/**
 * Created by kavan on 2.1.2015.
 */
function ExpenseItem(type, description, amount) {
    this.description = description;
    this.type = type;
    this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function () {
    return this.amount < 100;
}