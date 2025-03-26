class CustomNotFoundError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "NotFoundError";
  }
}

export default CustomNotFoundError;
