console.log("Server is Running")
//npm run dev , after changing it from "dev": "node ./src/index.js" to synching  "dev": "node mon ./src/index.js"
//<ctrl>+C :to stop server
////npm i cors : to allow anynomous to access my server
import cors from "cors"
import express from "express";
import productsRouter from "./routes/products.js"
import usersRouter from "./routes/users.js"
import sequelize from "./database/index.js"
import { authMiddleware } from "./middlewares/auth.js";

const app = express();

// middlewares
app.use(cors())//to execute middleware cors to allow access to server from local host
app.use(express.json())//to make server understand json
app.use(express.urlencoded({ extended: true }))//to encode json in the server


// routes
app.use('/users', usersRouter);
app.use('/products', authMiddleware, productsRouter); // we wrote users here and remove it from router paths, we use instead of get to deal with post,get,..

// server listening 
const port = 8080;
app.listen(port, async () => {
    try {
        sequelize.sync({ force: false }).then(() => console.log("database build")) // it won't create table if it already exists
        await sequelize.authenticate();
        console.log(`Server is listeneing on port ${port} and Connection has been established successfully.`)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});//or "port"+port

// server check
app.get("/", (req, res) => res.status(200).json({ message: `Hello from port No:${port}` }))