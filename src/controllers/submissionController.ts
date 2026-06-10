import type { Request, Response } from "express";
import type { CreateSubmissionDto } from "../dtos/CreateSubmissionDto.js";

export function addSubmission(req: Request, res: Response) {
  const submissionDto = req.body as CreateSubmissionDto;
  console.log("i am in the submission controller", req.body);
  //TODO: Add validation using zod

  //TODO: Add submission to the database

  return res.status(201).json({
    success: true,
    errors: {},
    message: "Successfully collected the submission",
    data: submissionDto,
  });
}
