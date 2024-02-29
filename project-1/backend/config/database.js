import mongoose from "mongoose"

const mongoDBCONNECT = () => {
    mongoose
      .connect(process.env.mongoDBURL)
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      })
      // .catch((error) => {
      //   console.log(error);
      // })
    }
  
export default mongoDBCONNECT