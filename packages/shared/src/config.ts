export interface AppConfig {
  apiUrl: string;
  appUrl: string;
  environment: string;
}

export const appConfig: AppConfig = {
  apiUrl: process.env.API_URL ?? 'http://localhost:4000',
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  environment: process.env.NODE_ENV ?? 'development'
};
