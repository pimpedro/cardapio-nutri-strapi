'use strict';

/**
 * nutritionist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nutritionist.nutritionist');
