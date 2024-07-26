import 'reflect-metadata';
import { describe, it } from 'mocha';
import { UserDto } from '../sample';
import { ClassTransformer } from '@geckoai/class-transformer';
import { HttpClient } from '../src';
// import { UserDto } from '../sample';

const transformer = new ClassTransformer();

describe('index.spec.ts', () => {
  const httpClient = HttpClient.create({
    baseURL: 'http://localhost:8000',
  });

  it('should ', () => {
    void httpClient.fetch(
      transformer.transform(UserDto, {
        name: '',
        password: '123',
      })
    );
  });
});
