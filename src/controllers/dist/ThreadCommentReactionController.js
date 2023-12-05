"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ThreadCommentReactionService_1 = require("../services/ThreadCommentReactionService");
var ThreadCommentReactionValidator_1 = require("../validators/ThreadCommentReactionValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["CREATE_ANY_ROLE"]),
checkBodyData(ThreadCommentReactionValidator_1.createThreadCommentReactionSchema), ThreadCommentReactionService_1.createThreadCommentReaction);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCommentReactionValidator_1.findThreadCommentReactionsSchema), ThreadCommentReactionService_1.findThreadCommentReactions);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCommentReactionValidator_1.findThreadCommentReactionSchema), ThreadCommentReactionService_1.findThreadCommentReaction);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["UPDATE_ANY_ROLE"]),
checkBodyData(ThreadCommentReactionValidator_1.updateThreadCommentReactionSchema), ThreadCommentReactionService_1.updateThreadCommentReaction);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["DELETE_ANY_ROLE"]),
checkBodyData(ThreadCommentReactionValidator_1.deleteThreadCommentReactionSchema), ThreadCommentReactionService_1.deleteThreadCommentReaction);
module.exports = router;
