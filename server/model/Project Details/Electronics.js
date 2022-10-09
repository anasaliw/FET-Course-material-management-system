import mongoose from "mongoose";

const electronics_Schema = mongoose.Schema(
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

const ElectronicsDetails = mongoose.model(
  "electronic_detail",
  electronics_Schema
);

export default ElectronicsDetails;
