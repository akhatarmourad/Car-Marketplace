import { faker } from '@faker-js/faker';

function createRandomCarsList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        milles: faker.number.int({min: 12000, max: 99000}),
        gearType: 'Automatic',
        price: faker.finance.amount({min: 4000, max: 26000}),
        category: Math.random() > 0.5 ? 'Old' : 'New'
    }
}

const carsList = faker.helpers.multiple(createRandomCarsList, {count: 10});

export default { carsList }