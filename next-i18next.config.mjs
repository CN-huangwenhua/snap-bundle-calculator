import path from 'path';

const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en', 'zh-CN', 'fr'],
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  localePath: path.resolve('./public/locales'),
};

export default nextI18NextConfig;
