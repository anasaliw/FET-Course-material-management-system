import { Software } from "../Constants/Software.js";
import SoftwareDetails from "../model/Project Details/Software.js";
export const SoftwareAPI = async () => {
  try {
    await SoftwareDetails.deleteMany({});
    await SoftwareDetails.insertMany(Software);
    console.log("Data is inserted");
  } catch (error) {
    console.log(error);
  }
};
