import ITCourseSchema from "../../model/Course Schema/CourseSchema.js";

export const AddCourse = async (req, res) => {
  // ! trying to manipulate depending on params

  const { ITSemester, ITSubject } = req.params;
  console.log("Semester" + " " + ITSemester);
  console.log("Subject" + " " + ITSubject);
  try {
    const data = await ITCourseSchema({
      [ITSemester]: { [ITSubject]: req.body },
    });
    await data.save();
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(400).json(error);
  }
};
