"use strict";
exports.__esModule = true;
exports.deleteThreadCommentSchema = exports.updateThreadCommentSchema = exports.findThreadCommentSchema = exports.findThreadCommentsSchema = exports.createThreadCommentSchema = void 0;
var Joi = require('joi');
exports.createThreadCommentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required()
});
exports.findThreadCommentsSchema = Joi.object({});
exports.findThreadCommentSchema = Joi.object({});
exports.updateThreadCommentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});
exports.deleteThreadCommentSchema = Joi.object({});
