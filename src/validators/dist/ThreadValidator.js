"use strict";
exports.__esModule = true;
exports.deleteThreadSchema = exports.updateThreadSchema = exports.findThreadSchema = exports.findThreadsSchema = exports.createThreadSchema = void 0;
var Joi = require('joi');
exports.createThreadSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required()
});
exports.findThreadsSchema = Joi.object({});
exports.findThreadSchema = Joi.object({});
exports.updateThreadSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});
exports.deleteThreadSchema = Joi.object({});
