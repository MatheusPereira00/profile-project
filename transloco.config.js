import { environment } from './src/environments/environment.prod';

module.exports = {
	rootTranslationsPath: 'src/assets/i18n/',
	langs: ['en-us', 'es-es', 'pt-br'],
	keysManager: {},
  flatten: {
    aot: environment.production,
  },
};
