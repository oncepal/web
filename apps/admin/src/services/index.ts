import { client } from 'api/sdk.gen';
import { redirect } from 'react-router';
import { useNavigate } from "react-router-dom";

export const navigateTo = (redirectTo: string) => {
    const navigate = useNavigate();
    navigate(redirectTo);
};
client.setConfig({

  baseUrl: 'http://localhost:1996',
});

client.interceptors.request.use((request) => {
  let newRequest = request;
  const token = localStorage.getItem('accessToken');
  if (token) {
    console.log('有token');
    request.headers.set('Authorization', `Bearer ${token}`);
  }
  return newRequest;
});

// client.interceptors.response.use((response) => {
//   const newResponse = response;
//   if (newResponse.status === 401) {
//     navigateTo('/login');
//   }

//   // do something
//   return newResponse;
// });

export * from 'api';
