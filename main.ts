#! /usr/bin/env node

import inquirer from "inquirer"; 

// define the list of currencies end thier exchange rates
let exchange_rates: any = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // Europen Currency(Euro)
    "JYP": 113, // Japenese Currency(Yen)
    "CAD": 1.3, // Canadain Currency(Dollar)
    "AUD": 1.65, //Australain Currency(Dollar)
    "PKR": 280, //Pakistani Currency(Rupees)
    // Add more currencies and thier exchange rates here
} 

// prompt the user select to currencies from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices:['USD','EUR','JYP','CAD','AUD','PKR']
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices:['USD','EUR','JYP','CAD','AUD','PKR']
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the Amount to convert:"
    }
]);

// Perform currency converion by using formula
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount

//Formula of converion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);