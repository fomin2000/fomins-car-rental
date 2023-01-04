const sequelize = require('../config/connection');
const { Cars } = require('../models')

const carData = require("./carData.json")

const seedCarDB = async () => {
    await sequelize.sync({ force: true });

    for (const car of carData) {
        await Cars.create({
          ...car
        });
    }
    process.exit(0);
}

seedCarDB()
