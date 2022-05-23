import express from "express";
import useRouter from "./routes/users.routes"

const port = 3000

const app = express()
app.use(express.json())

app.use("/users", useRouter)

app.listen(port, () => {
    console.log(`app abreto, porta ${port}`)
})