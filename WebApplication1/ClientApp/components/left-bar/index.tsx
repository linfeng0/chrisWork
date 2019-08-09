import * as React from 'react'
import Month from './month'
import Year from './year'


export class LeftBar extends React.Component {
    render() {
        return (
            <div className={'leftBar'}>
                <Year />
                <Month />
                <ul>
                    <li>请使用最新版本浏览器以便获取最佳效果</li>
                    <li>旧版本，请猛击<a href="QueryOwnResult.aspx">这里</a></li>
                    <li>问题或建议，请猛击<a target="_blank"  rel="noopener noreferrer" href="mailto:William.Luo@grapecity.com?subject=issue/suggestion about TimeCard&amp;cc=william.luo@grapecity.com">这里</a></li>
                </ul>
            </div>
        )
    }
}