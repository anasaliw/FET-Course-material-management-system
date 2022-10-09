import { Electronic } from "../Constants/Electronics.js";
import ElectronicsDetails from "../model/Project Details/Electronics.js";
export const ElectronicsAPI = async () => {
  try {
    await ElectronicsDetails.insertMany(Electronic);
    console.log("Data is inserted");
  } catch (error) {
    console.log(error);
  }
};
