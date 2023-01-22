import DiscussionSchema from "../../model/DiscussionForum/DiscussionSchema.js";
import { ObjectId } from "mongoose";
import { Mongoose } from "mongoose";

// ! Post a question
export const addQuestion = async (req, res) => {
  console.log(req.body);
  try {
    const saveQuestion = new DiscussionSchema(req.body);
    await saveQuestion.save();
    return res
      .status(201)
      .json({ msg: "Question Successfully", data: saveQuestion });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: error.response });
  }
};

// ! Get All Question
export const getAllQuestion = async (req, res) => {
  try {
    const allQuestion = await DiscussionSchema.find({}).sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ msg: "Successfully get all Question", data: allQuestion });
  } catch (error) {
    console.log(error.response);
    return res
      .status(400)
      .json({ msg: "Failed to get all Question", error: error.response });
  }
};

export const viewSingleQuestion = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await DiscussionSchema.findById({ _id: id });
    return res
      .status(200)
      .json({ msg: "Successfully get Single Question", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Get Single Question Failed", error: error.message });
  }
};

export const postAnswer = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  try {
    const data = await DiscussionSchema.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {
          commenter: req.body,
        },
      }
    );
    // const data = await DiscussionSchema.findByIdAndInsertOne(id, {
    //   commenter: req.body,
    // });
    return res.status(200).json({ msg: "Answer posted Successfully", data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Answer posted UnSuccessfully", error: error.response });
  }
};
