export class ErrorResponse {
    errors: string[] = [];
    isError = false;

    constructor(init?: Partial<ErrorResponse>) {
      Object.assign(this, init);
      this.isError = this.errors.length > 0;
    }
  }