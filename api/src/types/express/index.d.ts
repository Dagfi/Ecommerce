import { AnyColumn } from "drizzle-orm";

export {};

declare global {
  namespace Express {
    export interface Request {
      userId?: Number;
      cleanBody?: any;
    }
  }
}
