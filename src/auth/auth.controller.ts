import {Controller, Post, Body} from '@nestjs/common';
import { IsString, IsNotEmpty } from 'class-validator';
import { AuthService } from './auth.service';


class LoginDto{
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string
}

@Controller('auth')

export class AuthController {
    
    constructor(private readonly auth: AuthService) {}

    @Post('login')
    login (@Body() body: LoginDto){
        return this.auth.login(body.username, body.password);
    }
}