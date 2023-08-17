import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Dependencies(UserService, JwtService)
@Injectable()
export class AuthService {
  userService: UserService
  jwtService: JwtService

  constructor(userService, jwtService) {
    this.userService = userService
    this.jwtService = jwtService
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userService.findOneByEmail(email)

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException()
    }
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    }

    const accessToken = await this.jwtService.signAsync(payload)
    return accessToken
  }
}
