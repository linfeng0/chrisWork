import * as React from 'react'
import { navInfo } from "../commom/types"

//这里要问师父！！！为什么constructor的参数props还要指定一次类型
class Nav extends React.Component<{},navInfo>{
    constructor(props:{}) {
        super(props);
        this.state = {
            userName: "ChrisLi (GCEF)",
            imgAddr: "../images/logo.png"
        }
    }

    render() {
        return (
            <div id="header">
                <nav id="nav">
                    <h1 className="title">Time Card - {this.state.userName}</h1>
                    <a className="right" href="https://www.grapecity.com/" rel="noopener noreferrer" target="_blank"><img src={this.state.imgAddr} alt="grapecity"></img></a>
                </nav>
            </div>
        );
    }
}

export default Nav;
