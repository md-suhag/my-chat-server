import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((error) => {
      throw error;
    });
};

export { connectDB };
