import mongoose from "mongoose";

const telecom_Schema = mongoose.Schema(
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

const Telecom_Details = mongoose.model("telecom_details", telecom_Schema);

export default Telecom_Details;
