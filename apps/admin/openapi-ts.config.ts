import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'http://localhost:1996/api-json',
  output: {
    format: 'prettier',
    path: 'src/api',
  },
  plugins: [
    ...defaultPlugins,
    {
      name: '@hey-api/typescript',
      // ...custom options
    },
  ],
});