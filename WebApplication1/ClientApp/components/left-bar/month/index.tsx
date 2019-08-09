import * as React from 'react'
import { month } from '../../commom/types'
import { changeMonth } from './actions'
import { connect } from 'react-redux'
import { Appstate } from '../../../store/reducers'


interface MonthProps {
    curMonth: number,
    dispatch: any
}

class Month extends React.Component<MonthProps>{

    render() {
        const {curMonth,dispatch}=this.props;
        return (
            <div>
                <table className="month_table">
                    <tbody>
                        {Array.from(Array(6), (v, k) => k).map((v, k) =>
                            <tr key={k}>
                                {[1, 2].map((m, n) =>
                                    <td onClick={e=>dispatch(changeMonth(k*2+n))} key={month[k * 2 + n]} className={k * 2 + n === curMonth ? 'cur' : ""}>{month[k * 2 + n]}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div >
        )
    }
}

const mapStateToProps = (state: Appstate) => {
    return {
        curMonth:state.curMonth
    }
}


export default connect(mapStateToProps)(Month)