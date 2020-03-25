var faker = require('faker');

console.log('Product names and prices:');
console.log('-------------------------');
for (var i = 1; i < 11; i++) {
    console.log('Product name ' + i + ': ' + faker.commerce.productName() + ' - Price: $' + faker.finance.amount());
}

// image.cats
// lorem.paragraph
