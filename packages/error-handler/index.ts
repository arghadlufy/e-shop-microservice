export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 400, true, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 404, true, details);
  }
}

export class UnauthenticatedError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 401, true, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 403, true, details);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 500, true, details);
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 503, true, details);
  }
}

export class ConflictError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 409, true, details);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 422, true, details);
  }
}

export class NotImplementedError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 501, true, details);
  }
}

export class GatewayTimeoutError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 504, true, details);
  }
}

export class PayloadTooLargeError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 413, true, details);
  }
}

export class RequestTimeoutError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 408, true, details);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 429, true, details);
  }
}

export class MethodNotAllowedError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 405, true, details);
  }
}

export class NotAcceptableError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 406, true, details);
  }
}
