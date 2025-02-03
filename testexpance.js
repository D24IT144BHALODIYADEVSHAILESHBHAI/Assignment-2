const {
    addExpense,
    totalExpenses,
    filterByDateRange,
    asyncFetchExpenseReport
} = require('./expenseTracker');

addExpense("Groceries", 50.25, new Date("2025-01-15"));
addExpense("Rent", 1200, new Date("2025-01-01"));
addExpense("Utilities", 150, new Date("2025-01-10"));
addExpense("Entertainment", 75.5, new Date("2025-01-20"));


console.log("Total Expenses:", totalExpenses());


const startDate = new Date("2025-01-01");
const endDate = new Date("2025-01-15");
const filteredExpenses = filterByDateRange(startDate, endDate);
console.log("Filtered Expenses:", filteredExpenses);


asyncFetchExpenseReport()
    .then(report => console.log(report))
    .catch(error => console.error("Error fetching report:", error.message));
