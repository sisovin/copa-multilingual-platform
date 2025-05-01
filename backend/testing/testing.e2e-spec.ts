import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';

describe('TestingController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/POST testing/core-ai', () => {
    return request(app.getHttpServer())
      .post('/testing/core-ai')
      .send({ prompt: 'Test core AI services' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('result');
      });
  });

  it('/POST testing/interview-flow', () => {
    return request(app.getHttpServer())
      .post('/testing/interview-flow')
      .send({ prompt: 'Test interview flow', targetLanguage: 'en' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('result');
      });
  });

  it('/GET testing/video-platform', () => {
    return request(app.getHttpServer())
      .get('/testing/video-platform')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('result');
      });
  });

  it('/POST testing/voice-services', () => {
    return request(app.getHttpServer())
      .post('/testing/voice-services')
      .attach('audioFile', 'path/to/test/audio/file.wav')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('result');
      });
  });
});
