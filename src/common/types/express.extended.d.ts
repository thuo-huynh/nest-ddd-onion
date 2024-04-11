import 'express';

declare module 'express' {
  export interface Request {
    userSession?: {
      userId: UserId;
    };
  }
}
