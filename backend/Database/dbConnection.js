import mongoose from "mongoose";

 const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    // .then(() => {
    //   console.log("Connected to database successfully!");
    // })
    // .catch((err) => {
    //   console.log(`Some error occured while connedting to database! ${err}`);
    // });
};

export default dbConnection;