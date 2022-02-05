import { environment } from '@envs/environment.prod';

module.exports = {
	rootTranslationsPath: '@assets/i18n/',
	langs: ['en-us', 'es-es', 'pt-br'],
	keysManager: {},
  flatten: {
    aot: environment.production,
  },
};
