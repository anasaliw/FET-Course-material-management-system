import ITDetails from "../../model/Project Details/IT.js";
export const getSingleITProject = async (req, res) => {
  const id = req.params.id;
  console.log("IT :", id);
  try {
    const data = await ITDetails.findById({ _id: id });
    return res
      .status(200)
      .json({ data, msg: "Successfully Fetched IT Project" });
  } catch (error) {
    console.log("something went wrong");
    return res.status(500).json({ error, msg: error.message });
  }
};
