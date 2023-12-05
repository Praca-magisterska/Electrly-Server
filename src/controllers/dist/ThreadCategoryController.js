"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ThreadCategoryService_1 = require("../services/ThreadCategoryService");
var ThreadCategoryValidator_1 = require("../validators/ThreadCategoryValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["CREATE_ANY_ROLE"]),
checkBodyData(ThreadCategoryValidator_1.createThreadCategorySchema), ThreadCategoryService_1.createThreadCategory);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCategoryValidator_1.findThreadCategoriesSchema), ThreadCategoryService_1.findThreadCategories);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["FIND_ANY_ROLE"]),
checkBodyData(ThreadCategoryValidator_1.findThreadCategorySchema), ThreadCategoryService_1.findThreadCategory);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["UPDATE_ANY_ROLE"]),
checkBodyData(ThreadCategoryValidator_1.updateThreadCategorySchema), ThreadCategoryService_1.updateThreadCategory);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), 
// checkPermissions(["DELETE_ANY_ROLE"]),
checkBodyData(ThreadCategoryValidator_1.deleteThreadCategorySchema), ThreadCategoryService_1.deleteThreadCategory);
module.exports = router;
