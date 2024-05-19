import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('api/auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('Signup')
    async signup(){
        try{
            await this.authService.signup()
        }catch(err){
            console.log(err);
        }

    }

    @Post('Login')
    async login(){
        try{
            await this.authService.signin()
        }catch(err){
            console.log(err);
        }
    }

}