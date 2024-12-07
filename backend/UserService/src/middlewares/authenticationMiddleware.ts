import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";

const authService = new AuthService();

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ success: false, message: "Unauthorized: No token provided." });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = await authService.verifyToken(token);
    req.body = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized: Invalid token." });
  }
}
