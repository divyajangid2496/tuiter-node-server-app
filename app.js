import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://giuseppi:supersecretpassword@divyacluster.tdb0ywh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);

import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";


const app = express();

app.use(cors());

app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000)