import express from "express";

import { addSubmission } from "../../controllers/submissionController.js";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto.js";
import { validateCreateSubmissionDto } from "../../validators/createSubmissionValidator.js";

const submissionRouter = express.Router();

submissionRouter.post("/", validateCreateSubmissionDto(createSubmissionZodSchema), addSubmission);

export default submissionRouter;
