import { Roles } from './../decorators/role.decorator';
import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

const fakeUsers = {
  name: 'Yousuf Hassan',
  roles: ['super-admin'],
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get(Roles, context.getHandler());
    console.log(requiredRoles);
    if (requiredRoles.some((role) => fakeUsers.roles.includes(role))) {
      console.log('Users has permission');
      return true;
    }
    return false;
  }
}
