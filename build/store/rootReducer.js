"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = __importDefault(require("./features/counter/counterSlice"));
var rootReducer = toolkit_1.combineReducers({
    counter: counterSlice_1.default,
});
exports.default = rootReducer;
