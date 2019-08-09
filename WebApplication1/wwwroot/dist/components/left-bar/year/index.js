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
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
class Year extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            const { dispatch } = this.props;
            const value = parseInt(e.target.value);
            dispatch(actions_1.changeYear(value));
        };
    }
    render() {
        const cur_year = new Date().getFullYear();
        return (React.createElement("div", { className: 'yearButton' },
            React.createElement("select", { className: 'selector', onChange: (e) => this.onChange(e) }, Array.from(Array(cur_year - 2015), (m, n) => n).map((v, k) => React.createElement("option", { key: k, value: cur_year - k },
                cur_year - v,
                " ")))));
    }
}
const mapStateToProps = (state) => {
    return state;
};
exports.default = react_redux_1.connect(mapStateToProps)(Year);
//# sourceMappingURL=index.js.map