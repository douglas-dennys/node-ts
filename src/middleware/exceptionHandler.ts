import { Response, Request, ErrorRequestHandler, NextFunction } from 'express';

import * as Youch from 'youch';

export const exceptionHandler = async (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();

    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal server error' });
};
