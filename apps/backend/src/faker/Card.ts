import { faker } from '@faker-js/faker';

export interface ICardFaker {
    cityName: string;
    country: string;
    price: string;
    distance: string;
    images: Array<object>;
    rating: number;
   
}


export const card = () : ICardFaker => {
    return {
        cityName: faker.address.cityName(),
        country: faker.address.country(),
        price: faker.commerce.price(400, 5000, 0, '$'),
        distance: faker.random.numeric(4),
        
        images: [
            {
                imageUrl: faker.image.city()
            },
            {
                imageUrl: faker.image.city()
            },
            {
                imageUrl: faker.image.city()
            }
        ],
        rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        
    
    }
}

export const getCards = (count: number) => {
    if (count < 1) return;
    let cards : Array<ICardFaker> = [];
    for(let i = 0; i < count; i++) {
        let currentCard = card();
        cards.push(currentCard);
    }
    return cards;
}