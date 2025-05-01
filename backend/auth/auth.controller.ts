import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: AuthDto })
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: AuthDto })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto);
  }
}
