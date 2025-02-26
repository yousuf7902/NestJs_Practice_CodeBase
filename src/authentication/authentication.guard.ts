import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

const secret_key = "jfdlscvmndcmoejekmlmlsjfamlmvosdfsdfsddf";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try{
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization.split(' ')[1];
       if (!token) {
         throw new Error('Token not found');
       }
      request.user = this.jwtService.verify(token);
      return true;
    }
    catch(error){
      console.log(error);
      throw new UnauthorizedException();
    }

  }
}
