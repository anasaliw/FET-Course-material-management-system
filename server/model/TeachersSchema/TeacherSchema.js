import mongoose from "mongoose";

const teacher_Schema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    designation: String,
    password: String,
  },
  { timestamps: true }
);

const TeachersSchema = mongoose.model("teachers credentials", teacher_Schema);

export default TeachersSchema;
