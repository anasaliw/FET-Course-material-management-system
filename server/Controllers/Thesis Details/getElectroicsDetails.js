import ElectronicsDetails from "../../model/Project Details/Electronics.js";
export const getElectronicsDetails = async (req, res) => {
  try {
    const data = await ElectronicsDetails.find({});
    res.status(200).json({ data: data, msg: "Successfully Fetched IT Data" });
  } catch (error) {
    res.status(500).json({ error, msg: error.message });
  }
};
