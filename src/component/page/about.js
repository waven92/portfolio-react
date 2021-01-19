import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {
        return (
            <section>
                <Link to={`/`}>HOMEに戻る</Link>
                <h1 className="title">ABOUT</h1>
                <ul className="ContentsList">
                    <li className="ContentsItem">
                        愛媛大学農学部で免疫学を専攻していた
                    </li>
                    <li className="ContentsItem">
                        SIer企業でシステム開発に携わる
                    </li>
                    <li className="ContentsItem">
                        ECサイトを運営する会社でフロントエンドとして働く
                    </li>
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
                <Link to={`/`}>HOMEに戻る</Link>
            </section>
        );
    }
}
 
export default page2; 