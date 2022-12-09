import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';

import ListFriendController from '@/controllers/listfriends.controller';
import authMiddleware from '@/middlewares/auth.middleware';

class ListFriendRoute implements Routes {
  public path = '/list-friends';
  public router = Router();
  public listFriendController = new ListFriendController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.listFriendController.listFriend);
  }
}

export default ListFriendRoute;
