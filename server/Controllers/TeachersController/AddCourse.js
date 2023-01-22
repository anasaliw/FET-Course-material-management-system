import ITCourseSchema from "../../model/Course Schema/CourseSchema.js";
import ELCourseSchema from "../../model/Course Schema/electronicsCourseSchema.js";
import SWCourseSchema from "../../model/Course Schema/softwareCourseSchema.js";
import TLCourseSchema from "../../model/Course Schema/telecomCourseSchema.js";

export const getITCourses = async (req, res) => {
  let { semester, subject, dept } = req.params;
  console.log("Department" + " " + dept);
  console.log("Semester" + " " + semester);
  console.log("Subject" + " " + subject);

  try {
    const response = await ITCourseSchema.find({
      semester,
    });

    const data = response[0][semester];
    // return res.status(200).json({ response });
    for (let i = 0; i < data.length; i++) {
      if (data[i][subject]) {
        console.log(data[i][subject]);
        const course = data[i][subject];
        return res.status(200).json({ data: course });
      }
    }
    return res.status(404).json({ data: "Course not found" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const AddCourse = async (req, res) => {
  // ! trying to manipulate depending on params

  const { semester, subject, dept } = req.params;

  console.log("Department" + " " + dept);
  console.log("Semester" + " " + semester);
  console.log("Subject" + " " + subject);
  console.log(req.body);
  // console.log(req.files.week3[0].path);

  try {
    if (dept === "it") {
      const data = await ITCourseSchema.findOneAndUpdate(
        {
          _id: "63b96159d1c2d962f0682989",
        },
        {
          $push: {
            [semester]: {
              [subject]: {
                courseContent: req.body.courseContent,
                courseDescription: req.body.courseDescription,
                week1: req.files.week1[0].path,
                week2: req.files.week2[0].path,
                week3: req.files.week3[0].path,
                week4: req.files.week4[0].path,
                week5: req.files.week5[0].path,
                week6: req.files.week6[0].path,
                week7: req.files.week7[0].path,
                week8: req.files.week8[0].path,
                week9: req.files.week9[0].path,
                week10: req.files.week10[0].path,
              },
            },
          },
        }
      );
      await data.save();
      return res.status(200).json("ok");
    }
    if (dept === "software") {
      const data = await SWCourseSchema.findOneAndUpdate(
        {
          _id: "63c1c064f2e16cfc3c0cd9c8",
        },
        {
          $push: {
            [semester]: {
              [subject]: {
                courseContent: req.body.courseContent,
                courseDescription: req.body.courseDescription,
                week1: req.files.week1[0].path,
                week2: req.files.week2[0].path,
                week3: req.files.week3[0].path,
                week4: req.files.week4[0].path,
                week5: req.files.week5[0].path,
                week6: req.files.week6[0].path,
                week7: req.files.week7[0].path,
                week8: req.files.week8[0].path,
                week9: req.files.week9[0].path,
                week10: req.files.week10[0].path,
              },
            },
          },
        }
      );
      await data.save();
      return res.status(200).json("ok");
    }
    if (dept === "telecom") {
      const data = await TLCourseSchema.findByIdAndUpdate(
        {
          _id: "63c1bbcdc95e417168445812",
        },
        {
          $push: {
            [semester]: {
              [subject]: {
                courseContent: req.body.courseContent,
                courseDescription: req.body.courseDescription,
                week1: req.files.week1[0].path,
                week2: req.files.week2[0].path,
                week3: req.files.week3[0].path,
                week4: req.files.week4[0].path,
                week5: req.files.week5[0].path,
                week6: req.files.week6[0].path,
                week7: req.files.week7[0].path,
                week8: req.files.week8[0].path,
                week9: req.files.week9[0].path,
                week10: req.files.week10[0].path,
              },
            },
          },
        }
      );
      await data.save();
      return res.status(200).json("ok");
    }
    if (dept === "electronics") {
      const data = await ELCourseSchema.findOneAndUpdate(
        {
          _id: "63c1c1c5db6d5db8cc221a5d",
        },
        {
          $push: {
            [semester]: {
              [subject]: {
                courseContent: req.body.courseContent,
                courseDescription: req.body.courseDescription,
                week1: req.files.week1[0].path,
                week2: req.files.week2[0].path,
                week3: req.files.week3[0].path,
                week4: req.files.week4[0].path,
                week5: req.files.week5[0].path,
                week6: req.files.week6[0].path,
                week7: req.files.week7[0].path,
                week8: req.files.week8[0].path,
                week9: req.files.week9[0].path,
                week10: req.files.week10[0].path,
              },
            },
          },
        }
      );
      await data.save();
      return res.status(200).json("ok");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(203).json({ error: error.message });
  }
};
