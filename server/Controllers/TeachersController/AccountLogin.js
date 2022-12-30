import TeachersSchema from "../../model/TeachersSchema/TeacherSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginTeacher = async (req, res) => {
  console.log(req.body);
  try {
    const user = await TeachersSchema.findOne({ email: req.body.email });
    if (user) {
      const compared = await bcrypt.compare(req.body.password, user.password);

      if (!compared) {
        return res.status(403).json({ message: "Password does not match" });
      }
      const token = jwt.sign(
        {
          teacherId: user._id,
          teacherEmail: user.email,
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
