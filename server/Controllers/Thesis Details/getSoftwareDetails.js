import SoftwareDetails from "../../model/Project Details/Software.js";
export const getSoftwareDetails = async (req, res) => {
  try {
    const data = await SoftwareDetails.find({});
    res.status(200).json({ data: data, msg: "Successfully Fetched IT Data" });
  } catch (error) {
    res.status(500).json({ error, msg: error.message });
  }
};
