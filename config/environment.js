/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'git-browser',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' api.github.com",
      'font-src': "'self' data: api.github.com",
      'connect-src': "'self' api.github.com",
      'img-src': "'self' www.facebook.com api.github.com avatars.githubusercontent.com encrypted-tbn1.gstatic.com assets-cdn.github.com data:",
      'style-src': "'self' 'unsafe-inline' api.github.com",
      'frame-src': "api.github.com"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
