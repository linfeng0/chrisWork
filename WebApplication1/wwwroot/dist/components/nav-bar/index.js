"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
//这里要问师父！！！为什么constructor的参数props还要指定一次类型
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "ChrisLi (GCEF)",
            imgAddr: "../images/logo.png"
        };
    }
    render() {
        return (React.createElement("div", { id: "header" },
            React.createElement("nav", { id: "nav" },
                React.createElement("h1", { className: "title" },
                    "Time Card - ",
                    this.state.userName),
                React.createElement("a", { className: "right", href: "https://www.grapecity.com/", rel: "noopener noreferrer", target: "_blank" },
                    React.createElement("img", { src: this.state.imgAddr, alt: "grapecity" })))));
    }
}
exports.default = Nav;
//# sourceMappingURL=index.js.map