// const mongoose = require('mongoose')

// const mongo_url = process.env.MONGO_CONN;






// const mongoose = require("mongoose");

// const dbconnection = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/Login_dataBase");

//         console.log("MongoDB Connected");
//     } catch (err) {
//         console.log("DB Error:", err);
//     }
// };

// module.exports = { dbconnection };



const mongoose = require("mongoose");

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    throw err;
  }
};

module.exports = { dbconnection };
