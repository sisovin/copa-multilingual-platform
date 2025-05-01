import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(authDto: AuthDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(authDto);
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(authDto: AuthDto): Promise<User> {
    // Implement user registration logic here
    const user = new User();
    user.username = authDto.username;
    user.password = authDto.password; // In a real application, make sure to hash the password
    // Save the user to the database
    return user;
  }

  private async validateUser(authDto: AuthDto): Promise<User> {
    // Implement user validation logic here
    const user = new User();
    user.username = authDto.username;
    user.password = authDto.password;
    return user;
  }
}
