import ITDetails from "../../model/Project Details/IT.js";
export const getITDetails = async (req, res) => {
  try {
    const data = await ITDetails.find({});
    res.status(200).json({ data: data, msg: "Successfully Fetched IT Data" });
  } catch (error) {
    res.status(500).json({ error, msg: error.message });
  }
};
