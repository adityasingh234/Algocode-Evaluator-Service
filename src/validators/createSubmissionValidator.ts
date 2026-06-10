import type { ZodType } from "zod";
import type { CreateSubmissionDto } from "../dtos/CreateSubmissionDto.ts";
import type { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateCreateSubmissionDto =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        data: {},
        message: "Invalid request params received",
        error: error,
      });
    }
  };
