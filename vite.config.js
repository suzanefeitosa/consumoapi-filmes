import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { join } from 'path';

export default ({ mode }) => {
  if (mode === 'development') {
    const envConfig = dotenv.config({ path: join(__dirname, '.env') }).parsed;
    return defineConfig({
      env: envConfig,
    });
  } else {
    return defineConfig();
  }
};
