import TeachersSchema from "../../model/TeachersSchema/TeacherSchema.js";
import { teachersAccount } from "../../Constants/TeacherAccountCreation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const teacherSignup = () => {
  teachersAccount.map((data) => {
    const signUpTeacher = async () => {
      // const error = validationResult(req);
      // const { firstName, name, email, password } = req.body;
      // console.log(name);
      // console.log(req);
      try {
        let user = await TeachersSchema.findOne({
          email: data.email,
        });

        if (user) {
          // return res.status(403).json({
          //   message: "User already exits",
          // });
          console.log("already exist");
          return;
        }

        user = new TeachersSchema({
          name: data.name,
          designation: data.designation,
          email: data.email,
          password: data.password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);

        if (user) {
          const data = await user.save();
          // res.status(200).json({
          //   message:
          //     "User has been successfully registered Please check your email",
          // });
          console.log("user added successfully");
          return;
        }
        // return res.status()
      } catch (error) {
        console.log(error.message);
        // return res
        //   .status(200)
        //   .json({ msg: error.response, message: "Error in User signUp " });
      }
    };
    signUpTeacher();
  });
};

// export const teacherSignup = async (req, res) => {
//   try {
//     // let user = await TeachersSchema.findOne({
//     //   email: data.email,
//     // });

//     // if (user) {
//     //   return res.status(403).json({
//     //     message: "User already exits",
//     //   });
//     // }

//     let user = await TeachersSchema.insertMany({
//       teachersAccount,
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(teachersAccount.password, salt);

//     if (user) {
//       const data = await user.save();
//       res.status(200).json({
//         message:
//           "User has been successfully registered Please check your email",
//       });
//       console.log("user added successfully");
//       return;
//     }
//     // return res.status()
//   } catch (error) {
//     console.log(error.message);
//     return res
//       .status(500)
//       .json({ msg: error.response, message: "Error in User signUp " });
//   }
// };
