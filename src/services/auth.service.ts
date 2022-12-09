import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';

class AuthService {
  public async login(userData: CreateUserDto): Promise<{ tokenData: TokenData }> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = {
      _id: Math.floor(Math.random() * 5000).toString(),
      ...userData,
    };

    const tokenData = this.createToken(findUser);

    return { tokenData };
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export default AuthService;
