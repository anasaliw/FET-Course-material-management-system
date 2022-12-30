import AccountsSchema from "../../model/AccountCreationSchema/AccountCreateSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//Register Student

export const signUpStudent = async (req, res) => {
  // const error = validationResult(req);
  const { rollNo, name, email, password } = req.body;
  console.log(name);
  try {
    let user = await AccountsSchema.findOne({
      email: email,
    });

    if (user) {
      return res.status(403).json({
        message: "User already exits",
      });
    }

    user = new AccountsSchema({
      rollNo,
      email,
      name,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    if (user) {
      const data = await user.save();
      res.status(200).json({
        message:
          "User has been successfully registered Please check your email",
      });
      console.log("user added successfully");
      return;
    }
    // return res.status()
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ msg: error.response, message: "Error in User signUp " });
  }
};

export const loginStudent = async (req, res) => {
  console.log("from student", req.body);
  try {
    const user = await AccountsSchema.findOne({
      $or: [
        {
          email: req.body.email,
        },
        {
          rollNo: req.body.rollNo,
        },
      ],
    });
    if (user) {
      const compared = await bcrypt.compare(req.body.password, user.password);

      if (!compared) {
        return res.status(403).json({ message: "Password does not match" });
      }
      const token = jwt.sign(
        {
          studentId: user._id,
          studentEmail: user.email,
          studentRollNo: user.rollNo,
        },
        "RANDOM TOKEN",
        {
          expiresIn: "15min",
        }
      );

      return res.status(200).json({
        message: "Login Successful",
        email: user.email,
        token,
        user,
      });
    }
    return res.status(404).send({ message: "Email not found" });
  } catch (error) {
    return res.status(500).json({
      message: "Error in User Login Controller",
      error: error.message,
    });
  }
};
