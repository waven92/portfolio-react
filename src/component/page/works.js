import React from 'react';
import { Link } from 'react-router-dom';
import icon_other from '../../img/icon_other.png';
import about from '../../img/about.png';
import skill from '../../img/skill.png';

class Works extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                <h2 className="p-sub_title">WORK</h2>
                    <div className="work_contents_wrap">
                        <div className="l-contents_area work c-contents_area">
                            <img src={icon_other} width="250" height="200" alt="その他"/>
                            <p className="work_title">映画検索アプリ</p>
                            <p className="work_description">Reactコンポーネントや外部API、フック使い作成しました。</p>
                            <p className="work_description">技術・サービス：<br/>React, Hooks, create-react-app, CSS</p>
                        </div>
                        <div className="l-contents_area work c-contents_area">
                            <img src={icon_other} width="250" height="200" alt="その他"/>
                            <p className="work_title">ポートフォリオサイト</p>
                            <p className="work_description">SPAで構成しています。コンテンツの下に別コンテンツのナビゲーションを設置するなど、見やすさ・使いやすさにこだわりました。また、スマホ画面にも対応しています。</p>
                            <p className="work_description">技術・サービス：<br/>React, create-react-app, react-router-dom, Sass, gulp</p>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/about`} className="p-contents_nav_link">
                                <img src={about} width="150" alt="html5"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">
                                <img src={skill} width="150" alt="skills"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/`} className="p-contents_nav_nome">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default Works; 