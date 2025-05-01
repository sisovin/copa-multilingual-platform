import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { InterviewModule } from './interview/interview.module';
import { VideoModule } from './video/video.module';
import { VoiceModule } from './voice/voice.module';
import { LanguageModule } from './language/language.module';
import { TestingModule } from './testing/testing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
    AuthModule,
    InterviewModule,
    VideoModule,
    VoiceModule,
    LanguageModule,
    TestingModule,
  ],
})
export class AppModule {}
