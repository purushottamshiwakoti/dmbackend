'use strict';

/**
 * our-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-blog.our-blog');
