"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ThreadService_1 = require("../services/ThreadService");
var ThreadValidator_1 = require("../validators/ThreadValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["CREATE_ANY_ROLE"]),
checkBodyData(ThreadValidator_1.createThreadSchema), ThreadService_1.createThread);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadValidator_1.findThreadsSchema), ThreadService_1.findThreads);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadValidator_1.findThreadSchema), ThreadService_1.findThread);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["UPDATE_ANY_ROLE"]),
checkBodyData(ThreadValidator_1.updateThreadSchema), ThreadService_1.updateThread);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["DELETE_ANY_ROLE"]),
checkBodyData(ThreadValidator_1.deleteThreadSchema), ThreadService_1.deleteThread);
module.exports = router;
