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
import { SentryModule } from '@ntegral/nestjs-sentry';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT,
  release: process.env.SENTRY_RELEASE,
});

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
    SentryModule.forRoot({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT,
      release: process.env.SENTRY_RELEASE,
    }),
  ],
})
export class AppModule {}
