import mongoose from "mongoose";
const Account_Schema = mongoose.Schema(
  {
    rollNo: String,
    email: String,
    name: String,
    password: String,
  },
  { timestamps: true }
);

const AccountsSchema = mongoose.model("Account", Account_Schema);

export default AccountsSchema;
