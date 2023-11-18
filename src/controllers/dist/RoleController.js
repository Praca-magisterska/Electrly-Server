"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var RoleService_1 = require("../services/RoleService");
var RoleValidator_1 = require("../validators/RoleValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["CREATE_ANY_ROLE"]), checkBodyData(RoleValidator_1.createRoleSchema), RoleService_1.createRole);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_ROLE"]), checkBodyData(RoleValidator_1.findRolesSchema), RoleService_1.findRoles);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_ROLE"]), checkBodyData(RoleValidator_1.findRoleSchema), RoleService_1.findRole);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["UPDATE_ANY_ROLE"]), checkBodyData(RoleValidator_1.updateRoleSchema), RoleService_1.updateRole);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["DELETE_ANY_ROLE"]), checkBodyData(RoleValidator_1.deleteRoleSchema), RoleService_1.deleteRole);
module.exports = router;
