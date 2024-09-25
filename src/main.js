import "dotenv/config"
import e from "express"
import "./config/db.js"
import movieRouter from "./routes/movie-router.js"
import userRouter from "./routes/user-router.js"
const app = e();


app.use(e.json());
app.use("/user", userRouter)
app.use("/movie", movieRouter);
app.listen(process.env.API_PORT , () => {
    console.log(`listening on port ${process.env.API_PORT}`)
})