import ElectronicsDetails from "../../model/Project Details/Electronics.js";
export const getSingleElectronicsProject = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ElectronicsDetails.findById({ _id: id });
    return res
      .status(200)
      .json({ data: data, msg: "Successfully Fetched Electronics Data" });
  } catch (error) {
    return res.status(500).json({ error, msg: error.message });
  }
};
