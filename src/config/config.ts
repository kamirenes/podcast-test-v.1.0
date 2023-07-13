export const Config = {
  BACKEND_URL: process.env.REACT_APP_SERVER_URL || '',
  I18N: {
      LOCALES: ['en', 'es'],
      DEFAULT_LANGUAGE: process.env.REACT_APP_DEFAULT_LANG || 'en',
  },
  JWT_TOKEN_LIFETIME: parseInt(process.env.REACT_APP_JWT_TOKEN_LIFETIME || '', 10),
}
