import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                    <h2 className="p-sub_title">ABOUT</h2>
                    <ul className="about_contents">
                        <li className="ContentsItem">
                            愛媛大学農学部で免疫学を専攻していた
                        </li>
                        <li className="ContentsItem">
                            SIer企業でシステム開発に携わる
                        </li>
                        <li className="ContentsItem">
                            ECサイトを運営する会社でフロントエンドとして働く
                        </li>
                    </ul>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">Go To SKILLS</Link>
                        </li>
                        <li>
                            <Link to={`/works`} className="p-contents_nav_link">Go To WORKS</Link>
                        </li>
                    </ul>
                    <Link to={`/`}>HOMEに戻る</Link>
                </section>
            </article>
        );
    }
}
 
export default page2; 