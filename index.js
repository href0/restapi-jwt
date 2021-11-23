import express from "express";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// import Users from "./models/UserModel.js";
const app = express();

// cek koneksi database
try {
    await db.authenticate();
    console.log('Database conncected');
    // await Users.sync(); // jika tidak memiliki table user, sequalize akan membuat table secara otomotis
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=>console.log('server running at port 5000'));