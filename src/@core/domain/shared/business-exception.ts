export class BusinessException extends Error {
  public statusCode: number

  constructor(message: string, statusCode: number = 400) {
    super(message)
    this.name = 'Business error'
    this.statusCode = statusCode ?? 400
    Error.captureStackTrace(this, this.constructor)
  }
}
