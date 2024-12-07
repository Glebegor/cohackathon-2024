import { Request, Response, NextFunction } from "express";

// Define a custom error class
class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export abstract class BaseController {
  protected handleError(error: unknown, res: Response): void {
    if (error instanceof AppError) {
      // Known operational error
      console.error("Known error:", error);
      res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    } else {
      // Unknown error, potentially a bug in the code
      console.error("Unexpected error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}
