import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
 
class home extends React.Component {
    render() {
        return (
            <section>
                <h1 className="title">Portfolio</h1>
                <ul className="ContentsList">
                    <li className="ContentsItem">
                        <Link to={`/about`} className="ContentsItemLink">Go To ABOUT</Link> 
                    </li>
                    <li className="ContentsItem">
                        <Link to={`/skills`} className="ContentsItemLink">Go To SKILLS</Link>
                    </li>
                    <li className="ContentsItem">
                        <Link to={`/works`} className="ContentsItemLink">Go To WORKS</Link>
                    </li>
                </ul>
            </section>
        );
    }
}
 
export default home; 