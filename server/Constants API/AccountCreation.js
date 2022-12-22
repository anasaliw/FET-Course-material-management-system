import AccountsSchema from "../model/AccountCreationSchema/AccountCreateSchema.js";
import { Accounts } from "../Constants/AccountsCreation.js";
export const AccountCreation = async () => {
  try {
    await AccountsSchema.insertMany(Accounts);
    console.log("Accounts Created");
  } catch (error) {
    console.log(error.response);
  }
};
