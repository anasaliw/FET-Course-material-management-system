import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@anas-shard-00-00.0be97.mongodb.net:27017,anas-shard-00-01.0be97.mongodb.net:27017,anas-shard-00-02.0be97.mongodb.net:27017/Fyp?ssl=true&replicaSet=atlas-37d5r8-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Connection to Database is Established");
  } catch (error) {
    console.log("Connection Failed", error);
  }
};
