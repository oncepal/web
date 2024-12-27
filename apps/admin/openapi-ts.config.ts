import { createClient, defaultPlugins } from '@hey-api/openapi-ts';

createClient({
  client: '@hey-api/client-fetch',
  input: {
    path:'./api.yaml'
  },
  experimentalParser: true, 
  output: {
    format: 'prettier',
    path: './src/client',
  },
  plugins: [
    ...defaultPlugins,
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
  ],
});