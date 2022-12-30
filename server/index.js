import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Connection } from "./DBConnection/Connections.js";
import dotenv from "dotenv";
import route from "./Router/routes.js";
import { AccountCreation } from "./Constants API/AccountCreation.js";
import { teacherSignup } from "./Controllers/TeachersController/AccountCreation.js";
// import { IT } from "./Constants API/IT.js";
// import { ElectronicsAPI } from "./Constants API/Electronics.js";
// import { TelecomAPI } from "./Constants API/Telecom.js";
// import { SoftwareAPI } from "./Constants API/Software.js";
const app = express();
dotenv.config();
// ! MiddleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.use("/", route);
// !Database Connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

// ! Constant DataSaving API's
// AccountCreation();
// IT();
// ElectronicsAPI();
// TelecomAPI();
// SoftwareAPI();
// teacherSignup();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
