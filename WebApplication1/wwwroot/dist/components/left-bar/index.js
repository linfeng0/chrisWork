"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const month_1 = __importDefault(require("./month"));
const year_1 = __importDefault(require("./year"));
class LeftBar extends React.Component {
    render() {
        return (React.createElement("div", { className: 'leftBar' },
            React.createElement(year_1.default, null),
            React.createElement(month_1.default, null),
            React.createElement("ul", null,
                React.createElement("li", null, "\u8BF7\u4F7F\u7528\u6700\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u4EE5\u4FBF\u83B7\u53D6\u6700\u4F73\u6548\u679C"),
                React.createElement("li", null,
                    "\u65E7\u7248\u672C\uFF0C\u8BF7\u731B\u51FB",
                    React.createElement("a", { href: "QueryOwnResult.aspx" }, "\u8FD9\u91CC")),
                React.createElement("li", null,
                    "\u95EE\u9898\u6216\u5EFA\u8BAE\uFF0C\u8BF7\u731B\u51FB",
                    React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "mailto:William.Luo@grapecity.com?subject=issue/suggestion about TimeCard&cc=william.luo@grapecity.com" }, "\u8FD9\u91CC")))));
    }
}
exports.LeftBar = LeftBar;
//# sourceMappingURL=index.js.map