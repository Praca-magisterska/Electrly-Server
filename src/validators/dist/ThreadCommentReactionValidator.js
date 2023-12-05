"use strict";
exports.__esModule = true;
exports.deleteThreadCommentReactionSchema = exports.updateThreadCommentReactionSchema = exports.findThreadCommentReactionSchema = exports.findThreadCommentReactionsSchema = exports.createThreadCommentReactionSchema = void 0;
var Joi = require('joi');
exports.createThreadCommentReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    isDefault: Joi.boolean().required()
});
exports.findThreadCommentReactionsSchema = Joi.object({});
exports.findThreadCommentReactionSchema = Joi.object({});
exports.updateThreadCommentReactionSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30)
});
exports.deleteThreadCommentReactionSchema = Joi.object({});
