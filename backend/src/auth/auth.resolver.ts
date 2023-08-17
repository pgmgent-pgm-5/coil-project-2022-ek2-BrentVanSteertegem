import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { LoginDto } from './dto/login'
import { AuthService } from './auth.service'
import { Public } from './auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => String, { name: 'login' })
  login(@Args('loginInput') loginInput: LoginDto): Promise<string> {
    return this.authService.signIn(loginInput)
  }
}
