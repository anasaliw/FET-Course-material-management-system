import express from "express";
import { getElectronicsDetails } from "../Controllers/Thesis Details/getElectroicsDetails.js";
import { getITDetails } from "../Controllers/Thesis Details/getITDetails.js";
import { getSoftwareDetails } from "../Controllers/Thesis Details/getSoftwareDetails.js";
import { getTelecomDetails } from "../Controllers/Thesis Details/getTelecomDetails.js";
const route = express.Router();

route.get("/", getITDetails);
route.get("/software", getSoftwareDetails);
route.get("/telecom", getTelecomDetails);
route.get("/electronics", getElectronicsDetails);

export default route;
