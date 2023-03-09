"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCards = exports.card = void 0;
const faker_1 = require("@faker-js/faker");
const card = () => {
    return {
        cityName: faker_1.faker.address.cityName(),
        country: faker_1.faker.address.country(),
        price: faker_1.faker.commerce.price(400, 5000, 0, '$'),
        distance: faker_1.faker.random.numeric(4),
        images: [
            {
                imageUrl: faker_1.faker.image.city()
            },
            {
                imageUrl: faker_1.faker.image.city()
            },
            {
                imageUrl: faker_1.faker.image.city()
            }
        ],
        rating: faker_1.faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    };
};
exports.card = card;
const getCards = (count) => {
    if (count < 1)
        return;
    let cards = [];
    for (let i = 0; i < count; i++) {
        let currentCard = (0, exports.card)();
        cards.push(currentCard);
    }
    return cards;
};
exports.getCards = getCards;
