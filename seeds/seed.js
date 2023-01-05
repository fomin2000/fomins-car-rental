const sequelize = require('../config/connection');
const { Cars, User } = require('../models')

const carData = require("./carData.json")
const userData = require("./userData.json")

const seedCarDB = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    })

    for (const car of carData) {
        await Cars.create({
          ...car
        });
    }
    process.exit(0);
}

seedCarDB()
