import * as React from 'react'
import { weekDays } from '../commom/types'
import { Day } from './Day'
import { Appstate } from '../../store/reducers';
import { connect } from 'react-redux'
import { calendars } from '../commom/calendars';
import { randomRecord, hourArray, minAndSecArray } from '../commom/comFunc';
import { actionCreators } from './actions';


interface RecordItem {
    date: string//like:   '09-11'
    recording: string[]//like:    '09:43:00'
}

export interface ContentBarProps {
    curMonth: number,
    curYear: number,
    record: RecordItem[],
    dispatch: any
}

export interface stateItem {
    record: {
        date: string,
        recording: string[],
    }
}


//type ContentBarState = {
//    days: Array<stateItem>
//}




class ContentBar extends React.Component<ContentBarProps>{
    componentWillMount() {
        console.log(this.props.record);
        this.props.dispatch(actionCreators.getRecord(this.props.curYear, this.props.curMonth));
        console.log("content-bar Mounted");
        //this.generateState(this.props);
    }

    componentWillReceiveProps(nextProps: ContentBarProps) {

        if (nextProps.curMonth !== this.props.curMonth
            || nextProps.curYear !== this.props.curYear) {
            console.log("new render");

            this.props.dispatch(actionCreators.getRecord(this.props.curYear, this.props.curMonth));
            //console.log(this.props.record[0].date);
            //this.generateState(nextProps);
        }
    }

    render() {

        const week = this.props.record.length / 7, record = this.props.record;
        return (
            <div className={"content"}>
                <div className={'row week'}>
                    {weekDays.map((v, k) =>
                        <div key={v} className='header-column'><span>{v}</span></div>
                    )}
                </div>

                {Array.from(Array(week), (v, k) => k).map((p, q) =>
                    <div className={'row'}>{
                        Array.from(Array(7), (v, k) => k).map((m, n) =>
                            <Day curYear={this.props.curYear} date={this.props.record[q * 7 + n].date} recording={this.props.record[q * 7 + n].recording} />
                            //<p></p>
                        )}
                    </div>
                )}

            </div>
        )
    }
}

const mapStateToProps = (state: Appstate) => {
    return state
}

export default connect(mapStateToProps)(ContentBar)