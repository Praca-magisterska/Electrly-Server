"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ThreadReactionService_1 = require("../services/ThreadReactionService");
var ThreadReactionValidator_1 = require("../validators/ThreadReactionValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["CREATE_ANY_ROLE"]),
checkBodyData(ThreadReactionValidator_1.createThreadReactionSchema), ThreadReactionService_1.createThreadReaction);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadReactionValidator_1.findThreadReactionsSchema), ThreadReactionService_1.findThreadReactions);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadReactionValidator_1.findThreadReactionSchema), ThreadReactionService_1.findThreadReaction);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["UPDATE_ANY_ROLE"]),
checkBodyData(ThreadReactionValidator_1.updateThreadReactionSchema), ThreadReactionService_1.updateThreadReaction);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["DELETE_ANY_ROLE"]),
checkBodyData(ThreadReactionValidator_1.deleteThreadReactionSchema), ThreadReactionService_1.deleteThreadReaction);
module.exports = router;
