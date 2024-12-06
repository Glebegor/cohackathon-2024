import { Request, Response } from "express";

export abstract class BaseController {
  protected handleError(error: unknown, res: Response): void {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : error,
    });
  }
}
