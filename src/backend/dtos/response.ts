export default interface Response {
  status: Status;
  data: any;
  error?: any;
  details?: any;
}

export enum Status {
  OK = "OK",
  ERROR = "ERROR"
}
