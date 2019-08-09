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
const types_1 = require("../../commom/types");
const actions_1 = require("./actions");
const react_redux_1 = require("react-redux");
class Month extends React.Component {
    render() {
        const { curMonth, dispatch } = this.props;
        return (React.createElement("div", null,
            React.createElement("table", { className: "month_table" },
                React.createElement("tbody", null, Array.from(Array(6), (v, k) => k).map((v, k) => React.createElement("tr", { key: k }, [1, 2].map((m, n) => React.createElement("td", { onClick: e => dispatch(actions_1.changeMonth(k * 2 + n)), key: types_1.month[k * 2 + n], className: k * 2 + n === curMonth ? 'cur' : "" }, types_1.month[k * 2 + n]))))))));
    }
}
const mapStateToProps = (state) => {
    return {
        curMonth: state.curMonth
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Month);
//# sourceMappingURL=index.js.map