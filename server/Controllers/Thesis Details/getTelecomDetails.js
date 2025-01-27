import Telecom_Details from "../../model/Project Details/Telecom.js";
export const getTelecomDetails = async (req, res) => {
  try {
    const data = await Telecom_Details.find({});
    return res
      .status(200)
      .json({ data: data, msg: "Successfully Fetched IT Data" });
  } catch (error) {
    return res.status(500).json({ error, msg: error.message });
  }
};
