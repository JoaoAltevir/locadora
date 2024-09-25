import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB + process.env.DATABASE);
        console.log("Connected with DB")
    } catch (error) {
        console.log(error)
    }
})();