import mongoose from "mongoose";
const { Schema } = mongoose;
//Commenter Details Schema
const commenterDetails = mongoose.Schema(
  {
    commenterId: Schema.Types.ObjectId,
    answer: String,
    commenterName: String,
    commenterEmail: String,
  },
  { timestamps: true }
);

const Discussion_Schema = mongoose.Schema(
  {
    title: String,
    question: String,

    tags: [String],

    name: String,
    email: String,
    id: Schema.Types.ObjectId,
    commenter: [commenterDetails],
  },
  { timestamps: true }
);

const DiscussionSchema = mongoose.model("DiscussionForum", Discussion_Schema);

export default DiscussionSchema;
