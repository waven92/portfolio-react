import React from 'react';
import { Link } from 'react-router-dom';
import icon_other from '../../img/icon_other.png';

class Works extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                <h2 className="p-sub_title">WORK</h2>
                <p>個人で制作したものになります。</p>
                    <div className="work_contents_wrap">
                        <div className="p-contents_area work">
                            <img src={icon_other} width="250" height="200" alt="その他"/>
                            <p className="work_title">映画検索アプリ</p>
                            <p className="work_description">Reactコンポーネントや外部API、フック使い作成しました。</p>
                            <p className="work_description">技術・サービス：<br/>React, Hooks, create-react-app, CSS</p>
                        </div>
                        <div className="p-contents_area work">
                            <img src={icon_other} width="250" height="200" alt="その他"/>
                            <p className="work_title">ポートフォリオサイト</p>
                            <p className="work_description">当サイトです。SPAで作成しました。見やすさにこだわりました。</p>
                            <p className="work_description">技術・サービス：<br/>React, create-react-app, react-router-dom, Sass, gulp</p>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/about`} className="p-contents_nav_link">
                                ABOUT<br/>これまでの経歴について
                            </Link> 
                        </li>
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">Go To SKILLS</Link>
                        </li>
                    </ul>
                    <Link to={`/`}>HOMEに戻る</Link>
                </section>
            </article>
        );
    }
}
 
export default Works; 