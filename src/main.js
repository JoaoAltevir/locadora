import "dotenv/config"
import e from "express"
import "./config/db.js"

const app = e();


app.use(e.json());

app.listen(process.env.API_PORT , () => {
    console.log(`listening on port ${process.env.API_PORT}`)
})