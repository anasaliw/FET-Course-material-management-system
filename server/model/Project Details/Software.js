import mongoose from "mongoose";

const software_Schema = mongoose.Schema(
  {
    title: String,
    batch: String,
    department: String,
    names_with_rollNo: String,
    abstract: String,
    technologies: String,
    supervisor: String,
  },
  { timestamps: true }
);

const SoftwareDetails = mongoose.model("software_detail", software_Schema);

export default SoftwareDetails;
