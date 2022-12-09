import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { tokenData } = await this.authService.login(userData);

      res.status(200).json({ token: tokenData.token, success: true });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
