"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var rootReducer_1 = __importDefault(require("./rootReducer"));
var store = toolkit_1.configureStore({
    reducer: rootReducer_1.default
});
exports.default = store;
