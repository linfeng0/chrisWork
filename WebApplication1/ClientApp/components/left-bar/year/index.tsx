import * as React from 'react'
import { Appstate } from '../../../store/reducers';
import { connect } from 'react-redux';
import { changeYear } from './actions';


interface YearProps {
    curYear: number,
    dispatch: any
}

class Year extends React.Component<YearProps>{
    
    onChange = (e:any)=>{
        const {dispatch} = this.props;
        const value = parseInt(e.target.value);
        dispatch(changeYear(value));
    }

    render() {
        const cur_year = new Date().getFullYear();
        return (
            <div className={'yearButton'}>
                <select className={'selector'} onChange={(e)=>this.onChange(e)}>
                    {Array.from(Array(cur_year-2015),(m,n)=>n).map((v,k)=>
                        <option key={k} value={cur_year-k} >{cur_year-v } </option>
                        )}
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state:Appstate)=>{
    return  state
}

export default connect(mapStateToProps)(Year)