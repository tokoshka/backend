import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { JwtRefreshPayload } from './strategies/refresh-token.strategy';

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/signup')
  @ApiBearerAuth('Authorization')
  signUp(@Body(ValidationPipe) user: SignupDto) {
    return this.authService.signUp(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  @ApiBearerAuth('Authorization')
  signIn(@Body(ValidationPipe) user: SigninDto) {
    return this.authService.signIn(user);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('/logout')
  logout(@CurrentUser() payload: JwtRefreshPayload) {
    return this.authService.logout(payload._id, payload.refreshToken);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('/refresh')
  refreshTokens(@CurrentUser() payload: JwtRefreshPayload) {
    return this.authService.refreshTokens(payload._id, payload.refreshToken);
  }
}
