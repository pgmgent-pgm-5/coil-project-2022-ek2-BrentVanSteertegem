import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Dependencies(UserService, JwtService)
@Injectable()
export class AuthService {
  userService: UserService
  jwtService: JwtService

  constructor(userService, jwtService) {
    this.userService = userService
    this.jwtService = jwtService
  }

  signIn = async (email: string, password: string) => {
    const user = await this.userService.findOneByEmail(email)
    if (user?.password !== password) {
      throw new UnauthorizedException()
    }
    const payload = { email: user.email, role: user.role }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
