import * as React from 'react'
import { isLeaveEarly, stampPoint, isWeekends } from '../../commom/comFunc'


export interface DayProps {
    curYear: number
    date: string//like:   '09-11'
    recording: string[]//like:    '09:43:00'
}

export class Day extends React.Component<DayProps>{
    componentWillMount() {
        console.log(this.props);
    }
    culStatus = (props: DayProps) => {
        if (stampPoint(props.recording[0].split(":")) > 32460) {
            //console.log(stampPoint(props.record.recording[0].split(":")))
            return "迟到";
        } else if (isLeaveEarly(props.recording[0], props.recording[props.recording.length - 1])) {
            //console.log(stampPoint(props.record.recording[0].split(":")))
            return "早退";
        } else {
            return "辛苦了!";
        }
    }
    render() {
        const { curYear, date, recording } = { ...this.props };
        const status = this.culStatus(this.props);
        // console.log(this.props)
        return (
            <div className={'column ' + (isWeekends(curYear, date) ? "weekends" : "workDay")}>
                <div className="record ">
                    <p className='date'>{date}</p>
                    <ul className='recording'>
                        {recording.map((v, k) =>
                            <li key={date + v}>{v}</li>
                        )}
                    </ul>
                </div>
                <div className={'status'}>
                    <label className={"state " + (status.length > 2 ? "good" : (status === "早退" ? "bad" : "terrible"))}>{this.culStatus(this.props)}</label>

                </div>
            </div>
        )
    }
}