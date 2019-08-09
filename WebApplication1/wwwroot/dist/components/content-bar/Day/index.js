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
const comFunc_1 = require("../../commom/comFunc");
class Day extends React.Component {
    constructor() {
        super(...arguments);
        this.culStatus = (props) => {
            if (comFunc_1.stampPoint(props.recording[0].split(":")) > 32460) {
                //console.log(stampPoint(props.record.recording[0].split(":")))
                return "迟到";
            }
            else if (comFunc_1.isLeaveEarly(props.recording[0], props.recording[props.recording.length - 1])) {
                //console.log(stampPoint(props.record.recording[0].split(":")))
                return "早退";
            }
            else {
                return "辛苦了";
            }
        };
    }
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        const { curYear, date, recording } = Object.assign({}, this.props);
        const status = this.culStatus(this.props);
        // console.log(this.props)
        return (React.createElement("div", { className: 'column ' + (comFunc_1.isWeekends(curYear, date) ? "weekends" : "workDay") },
            React.createElement("div", { className: "record " },
                React.createElement("p", { className: 'date' }, date),
                React.createElement("ul", { className: 'recording' }, recording.map((v, k) => React.createElement("li", { key: date + v }, v)))),
            React.createElement("div", { className: 'status' },
                React.createElement("label", { className: "state " + (status.length > 2 ? "good" : (status === "早退" ? "bad" : "terrible")) }, this.culStatus(this.props)))));
    }
}
exports.Day = Day;
//# sourceMappingURL=index.js.map