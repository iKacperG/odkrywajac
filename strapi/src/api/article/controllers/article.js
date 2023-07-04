'use strict';

/**
 * article controller
 */

const schema = require("../content-types/article/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::article.article", schema);
