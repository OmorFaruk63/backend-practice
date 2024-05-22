import express from "express";
import { studentController } from "./student.controller";

const route = express.Router();
route.post("/create-student", studentController.createStudent);

export const studentRoute = route;
