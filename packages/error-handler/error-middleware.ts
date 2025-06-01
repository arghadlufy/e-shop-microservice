import { NextFunction, Request, Response } from "express";
import { AppError } from "./index";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    const { statusCode, message, details } = err;
    console.log(`Error ${req.method} ${req.url}`, {
      statusCode,
      message,
      details,
    });

    res.status(statusCode).json({
      status: "error",
      message,
      ...(details && { details }),
    });
  } else {
    console.error(`Unhandled error ${req.method} ${req.url}`, err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
