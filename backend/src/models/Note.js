import mongoose from "mongoose"

// 1st step: Create a new Schema
// 2nd step: You would create a model based off that schema

const notesSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  } 
},{timestamps:true}
);

const Note = mongoose.model("Note",notesSchema)

export default Note