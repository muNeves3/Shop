"use strict";
import "express-async-errors";
import * as express from "express";
import { NextFunction, Request, Response } from "express";
import AppError from "./shared/AppError";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(
        err.statusCode >= 100 && err.statusCode < 600 ? err.statusCode : 500
      )
      .send(err.message)
      .json({
        status: "error",
        message: err.message,
      });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

// const isPortFree = (port: number) =>
// new Promise(resolve => {
//   const server = require('http')
//     .createServer()
//     .listen(port, () => {
//       server.close()
//       resolve(true)
//     })
//     .on('error', () => {
//       resolve(false)
//     })
// })

// isPortFree(3000).then(isFree => {
//   if(isFree === true) {
//     app.listen(3000, () => console.log('Server started on 3000'));
//   } else {
//     const port =  Math.floor(1000 + Math.random() * 9000);
//     app.listen(port, () => console.log('Server started on ' + port));
//   }
// })

export { app };
