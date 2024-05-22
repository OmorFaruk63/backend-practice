import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.createStudentINtoDb(student);

    res.status(200).json({
      success: true,
      data: result,
      massage: "Student create successful",
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
};
