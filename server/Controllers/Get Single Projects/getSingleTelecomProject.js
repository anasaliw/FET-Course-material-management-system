import Telecom_Details from "../../model/Project Details/Telecom.js";
export const getSingleTelecomDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Telecom_Details.findById({ _id: id });
    return res
      .status(200)
      .json({ data: data, msg: "Successfully Fetched Telecom Data" });
  } catch (error) {
    return res.status(500).json({ error, msg: error.message });
  }
};
