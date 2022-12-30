import { information_technology } from "../Constants/IT.js";
import ITDetails from "../model/Project Details/IT.js";
export const IT = async () => {
  try {
    // await ITDetails.deleteMany({});
    await ITDetails.insertMany(information_technology);
    console.log("Data is inserted");
  } catch (error) {
    console.log(error);
  }
};
