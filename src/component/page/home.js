import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
 
class home extends React.Component {
    render() {
        return (
            <article>
                <h1>Portfolio</h1>
                <Link to={`/about`}>Go To ABOUT</Link> 
                <br/>
                <Link to={`/skills`}>Go To SKILLS</Link> 
                <br/>
                <Link to={`/works`}>Go To WORKS</Link> 
            </article>
        );
    }
}
 
export default home; 