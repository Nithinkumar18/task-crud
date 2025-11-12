import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  validateUser(username: string, password: string) {
    if (
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD
    ) {
      return true;
    }
    return false;
  }

  login(username: string, password: string) {
    if (!this.validateUser(username, password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username };
    if (!process.env.JWT_SECRET) {
      console.warn('JWT_SECRET is not set; tokens will be unsigned or invalid');
    }

    return { access_token: this.jwt.sign(payload, { secret: process.env.JWT_SECRET }) };
  }
}
