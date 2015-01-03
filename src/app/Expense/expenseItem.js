/**
 * Created by kavan on 2.1.2015.
 */
function ExpenseItem(title, description, amount) {
    this.description = description;
    this.title = title;
    this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function () {
    return this.amount < 100;
}