const stock = {
   macbook: 2,
   iphone: 4
};

function processPayment(itemName) {
   stock[itemName.toLowerCase()]--;
   console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
   console.log(`No more ${itemName} in stock`);
   console.log(`Payment is not being processed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
   console.log(`Verifying the stock of ${itemName}`);
   
   const item = itemName.toLowerCase();
   
   if (stock[item] && stock[item] > 0) {
       callbackPayment(itemName);
   } else {
       callbackError(itemName);
   }
}

const userChoice = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

if (userChoice) {
   processOrder(userChoice, processPayment, processError);
}