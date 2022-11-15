import ITDetails from "../../model/Project Details/IT.js";
export const getITDetails = async (req, res) => {
  try {
    const data = await ITDetails.find({});
    return res.status(200).json({ data, msg: "Successfully Fetched IT Data" });
  } catch (error) {
    return res.status(500).json({ error, msg: error.message });
  }
};
