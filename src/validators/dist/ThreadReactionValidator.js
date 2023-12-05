"use strict";
exports.__esModule = true;
exports.deleteThreadReactionSchema = exports.updateThreadReactionSchema = exports.findThreadReactionSchema = exports.findThreadReactionsSchema = exports.createThreadReactionSchema = void 0;
var Joi = require('joi');
exports.createThreadReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required()
});
exports.findThreadReactionsSchema = Joi.object({});
exports.findThreadReactionSchema = Joi.object({});
exports.updateThreadReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});
exports.deleteThreadReactionSchema = Joi.object({});
