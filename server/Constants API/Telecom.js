import Telecom_Details from "../model/Project Details/Telecom.js";
import { Telecom } from "../Constants/Telecom.js";
export const TelecomAPI = async () => {
  try {
    await Telecom_Details.insertMany(Telecom);
    console.log("Data is inserted");
  } catch (error) {
    console.log(error);
  }
};
