import { Student } from "./student.interface";
import { StudentModel } from "./student.modules";
const createStudentINtoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentServices = {
  createStudentINtoDb,
};
