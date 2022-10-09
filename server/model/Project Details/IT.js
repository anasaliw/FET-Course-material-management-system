import mongoose from "mongoose";

const it_Schema = mongoose.Schema(
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

const ITDetails = mongoose.model("information_technology", it_Schema);

export default ITDetails;
