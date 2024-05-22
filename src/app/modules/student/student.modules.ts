import { Student } from "./student.interface";
import { Schema, model } from "mongoose";

const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  gender: ["male", "female"],
});

export const StudentModel = model<Student>("Student", studentSchema);
