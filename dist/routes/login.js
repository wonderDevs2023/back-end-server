"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
exports.router = (0, express_1.Router)();
// // parse application/x-www-form-urlencoded
exports.router.use(body_parser_1.default.urlencoded({ extended: true }));
// // parse application/json
exports.router.use(body_parser_1.default.json());
exports.router.post('/', (req, res) => {
    res.send(JSON.stringify(req.body, null, 2));
});
//# sourceMappingURL=login.js.map