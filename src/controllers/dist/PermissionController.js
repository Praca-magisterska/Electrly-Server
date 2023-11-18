"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var PermissionService_1 = require("../services/PermissionService");
var PermissionValidator_1 = require("../validators/PermissionValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["CREATE_ANY_PERMISSION"]), checkBodyData(PermissionValidator_1.createPermissionSchema), PermissionService_1.createPermission);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_PERMISSION"]), checkBodyData(PermissionValidator_1.findPermissionsSchema), PermissionService_1.findPermissions);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_PERMISSION"]), checkBodyData(PermissionValidator_1.findPermissionSchema), PermissionService_1.findPermission);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["UPDATE_ANY_PERMISSION"]), checkBodyData(PermissionValidator_1.updatePermissionSchema), PermissionService_1.updatePermission);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["DELETE_ANY_PERMISSION"]), checkBodyData(PermissionValidator_1.deletePermissionSchema), PermissionService_1.deletePermission);
module.exports = router;