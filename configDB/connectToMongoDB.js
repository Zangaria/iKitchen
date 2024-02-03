import dotenv from 'dotenv';
import mongoose from 'mongoose';
import retry from 'retry';
dotenv.config();


// Connect Update With Retry Amitoz 27/01/24
const USER = process.env.MONGOUSER;
const PASS = process.env.MONGOPASSWORD;
const uri = `mongodb+srv://${USER}:${PASS}@zangaria.gfmd0on.mongodb.net/iKitchen?retryWrites=true&w=majority`;
//const uri = `mongodb+srv://zangaria:tuba123@zangaria.gfmd0on.mongodb.net/iKitchen?retryWrites=true&w=majority`;

export const connectToMongoDB = async () => {
  return new Promise((resolve, reject) => {
    const operation = retry.operation();

    operation.attempt(async () => {
      try {
        await mongoose.connect(uri, {
          serverSelectionTimeoutMS: 5000,
        });
        console.log('MongoDB Connected...');
        resolve({ msg: "MongoDB Connected..." });
      } catch (error) {
        if (operation.retry(error)) {
          reject({ err: true, msg: error.message });
        }
      }
    });
  });
};
