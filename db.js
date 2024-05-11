const mongoose = require("mongoose");
const mongoURI =
  "mongodb://GOODFOOD:gfood@ac-nqubccw-shard-00-00.xetx6y8.mongodb.net:27017,ac-nqubccw-shard-00-01.xetx6y8.mongodb.net:27017,ac-nqubccw-shard-00-02.xetx6y8.mongodb.net:27017/goodfood?ssl=true&replicaSet=atlas-a7m3h7-shard-0&authSource=admin&retryWrites=true&w=majority";
//   "mongodb+srv://GOODFOOD:gfood@cluster0.xetx6y8.mongodb.net/goodfood?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err)
      else {
        console.log("connected");
        // retrieve data from database
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection("foodCategory");
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
        });
      }
    });
}

module.exports = mongoDB;
