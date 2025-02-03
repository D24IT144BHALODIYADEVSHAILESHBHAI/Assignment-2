const expenses = [];
function addExpense(description, amount, date) {
    try {
        if (!description) {
            throw new Error("Description cannot be empty.");
        }
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number.");
        }
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error("Invalid date.");
        }
        expenses.push({ description, amount, date });
        console.log("Expense added successfully!");
    } catch (error) {
        console.error("Error adding expense:", error.message);
    }
}
function totalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function filterByDateRange(startDate, endDate) {
    return expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
}
function asyncFetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (expenses.length > 0) {
                resolve(`Expense Report: Total Expenses = $${totalExpenses()}`);
            } else {
                reject(new Error("No expenses available to generate a report."));
            }
        }, 2000);
    });
}
module.exports = {
    addExpense,
    totalExpenses,
    filterByDateRange,
    asyncFetchExpenseReport
};