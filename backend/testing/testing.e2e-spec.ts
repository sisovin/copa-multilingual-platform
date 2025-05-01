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

  // E2E test for user login
  it('/POST auth/login', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpassword' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('accessToken');
      });
  });

  // E2E test for user registration
  it('/POST auth/register', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ username: 'newuser', password: 'newpassword' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('username', 'newuser');
      });
  });

  // E2E test for getting technical interview prompt
  it('/GET interview/tech-prompt', () => {
    return request(app.getHttpServer())
      .get('/interview/tech-prompt')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('prompt');
      });
  });

  // E2E test for getting behavioral interview prompt
  it('/GET interview/behavioral-prompt', () => {
    return request(app.getHttpServer())
      .get('/interview/behavioral-prompt')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('prompt');
      });
  });

  // E2E test for evaluating interview response
  it('/POST interview/evaluate', () => {
    return request(app.getHttpServer())
      .post('/interview/evaluate')
      .send({ response: 'This is a test response.' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('evaluation');
      });
  });
});
