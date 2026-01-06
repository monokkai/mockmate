export class MockmateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MockmateError";
  }
}

export class SourceFetchError extends MockmateError {
  constructor(message: string) {
    super(message);
    this.name = "SourceFetchError";
  }
}
