import SoftwareDetails from "../../model/Project Details/Software.js";
export const getSingleSoftwareProject = async (req, res) => {
  const id = req.params.id;
  console.log("SF : ", id);
  try {
    const data = await SoftwareDetails.findById({ _id: id });
    return res
      .status(200)
      .json({ data, msg: "Successfully Fetched Software Data" });
  } catch (error) {
    console.log("something went wrong");
    return res.status(500).json({ error, msg: error.message });
  }
};
