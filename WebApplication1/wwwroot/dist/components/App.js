"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const nav_bar_1 = __importDefault(require("./nav-bar"));
const left_bar_1 = require("./left-bar");
const index_1 = __importDefault(require("./content-bar/index"));
const App = (state) => {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(nav_bar_1.default, null),
        react_1.default.createElement("div", { className: "main" },
            react_1.default.createElement(left_bar_1.LeftBar, null),
            react_1.default.createElement(index_1.default, null))));
};
exports.default = App;
//# sourceMappingURL=App.js.map