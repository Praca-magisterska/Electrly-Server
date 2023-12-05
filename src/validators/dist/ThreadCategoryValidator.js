"use strict";
exports.__esModule = true;
exports.deleteThreadCategorySchema = exports.updateThreadCategorySchema = exports.findThreadCategorySchema = exports.findThreadCategoriesSchema = exports.createThreadCategorySchema = void 0;
var Joi = require('joi');
exports.createThreadCategorySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required()
});
exports.findThreadCategoriesSchema = Joi.object({});
exports.findThreadCategorySchema = Joi.object({});
exports.updateThreadCategorySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});
exports.deleteThreadCategorySchema = Joi.object({});
