import { NextFunction, Request, Response } from 'express';
import * as http from 'http';

class ListFriendController {
  public listFriend = async (_req: Request, res: Response, next: NextFunction) => {
    const request = http.get('http://jsonplaceholder.typicode.com/users', response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        res.send(data);
      });
    });

    request.on('error', error => {
      next(error);
    });

    request.end();
  };
}

export default ListFriendController;
