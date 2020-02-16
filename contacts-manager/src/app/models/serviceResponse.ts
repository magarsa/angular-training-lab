import { ErrorResponse } from './errorResponse';
export class ServiceResponse<T> {
  data: T;
  error: ErrorResponse = new ErrorResponse();

  constructor(init?: Partial<ServiceResponse<T>>) {
    Object.assign(this, init);
  }
}