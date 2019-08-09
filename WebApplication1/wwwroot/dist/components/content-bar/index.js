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
const types_1 = require("../commom/types");
const Day_1 = require("./Day");
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
//type ContentBarState = {
//    days: Array<stateItem>
//}
class ContentBar extends React.Component {
    componentWillMount() {
        console.log(this.props.record);
        this.props.dispatch(actions_1.actionCreators.getRecord(this.props.curYear, this.props.curMonth));
        console.log("content-bar Mounted");
        //this.generateState(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.curMonth !== this.props.curMonth
            || nextProps.curYear !== this.props.curYear) {
            console.log("new render");
            this.props.dispatch(actions_1.actionCreators.getRecord(this.props.curYear, this.props.curMonth));
            //console.log(this.props.record[0].date);
            //this.generateState(nextProps);
        }
    }
    render() {
        const week = this.props.record.length / 7, record = this.props.record;
        return (React.createElement("div", { className: "content" },
            React.createElement("div", { className: 'row week' }, types_1.weekDays.map((v, k) => React.createElement("h3", { key: v, className: 'column' }, v))),
            Array.from(Array(week), (v, k) => k).map((p, q) => React.createElement("div", { className: 'row' }, Array.from(Array(7), (v, k) => k).map((m, n) => React.createElement(Day_1.Day, { curYear: this.props.curYear, date: this.props.record[q * 7 + n].date, recording: this.props.record[q * 7 + n].recording })
            //<p></p>
            )))));
    }
}
const mapStateToProps = (state) => {
    return state;
};
exports.default = react_redux_1.connect(mapStateToProps)(ContentBar);
//# sourceMappingURL=index.js.map