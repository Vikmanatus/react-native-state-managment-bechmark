import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});


export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
export const NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
export const API_URL: string = process.env.API_URL ? process.env.API_URL : `http://localhost:${PORT}`;


