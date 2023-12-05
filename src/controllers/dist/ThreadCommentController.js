"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ThreadCommentService_1 = require("../services/ThreadCommentService");
var ThreadCommentValidator_1 = require("../validators/ThreadCommentValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["CREATE_ANY_ROLE"]),
checkBodyData(ThreadCommentValidator_1.createThreadCommentSchema), ThreadCommentService_1.createThreadComment);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCommentValidator_1.findThreadCommentsSchema), ThreadCommentService_1.findThreadComments);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCommentValidator_1.findThreadCommentSchema), ThreadCommentService_1.findThreadComment);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["UPDATE_ANY_ROLE"]),
checkBodyData(ThreadCommentValidator_1.updateThreadCommentSchema), ThreadCommentService_1.updateThreadComment);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["DELETE_ANY_ROLE"]),
checkBodyData(ThreadCommentValidator_1.deleteThreadCommentSchema), ThreadCommentService_1.deleteThreadComment);
module.exports = router;
