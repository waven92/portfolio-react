import React from 'react';
import { Link } from 'react-router-dom';
import reacr_app_img from '../../img/react_app.png';
import portfolio_img from '../../img/portfolio.png';
import about from '../../img/about.png';
import skill from '../../img/skill.png';

class Works extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/portfolio-react/`}>Portfolio</Link></h1>
                <section>
                <h2 className="p-sub_title">WORK</h2>
                    <div className="work_contents_wrap">
                        <div className="l-contents_area work c-contents_area">
                            <img src={reacr_app_img} width="426" height="294" alt="映画検索アプリ" className="p-work_img"/>
                            <p className="p-work_title">映画検索アプリ</p>
                            <p>チュートリアルに沿って作成しました。ReactコンポーネントやReact Hooks、外部APIの連携方法について理解を深めることができました。</p>
                            <p>技術・サービス：<br/>React, Hooks, create-react-app, CSS</p>
                            <a className="p-work_github" href="https://github.com/waven92/react_app">GitHub</a>
                        </div>
                        <div className="l-contents_area work c-contents_area">
                            <img src={portfolio_img} width="426" height="294" alt="ポートフォリオサイト" className="p-work_img"/>
                            <p className="p-work_title">ポートフォリオサイト</p>
                            <p>SPAで構成しています。コンテンツの下に別コンテンツのナビゲーションを設置するなど、見やすさ・使いやすさにこだわりました。また、スマホ画面にも対応しています。</p>
                            <p>技術・サービス：<br/>React, create-react-app, react-router-dom, Sass, gulp</p>
                            <a className="p-work_github" href="https://github.com/waven92/portfolio-react">GitHub</a>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-contents_nav_link">
                                <img src={about} width="150" height="150" alt="html5"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
                        <li>
                            <Link to={`/portfolio-react/skills`} className="p-contents_nav_link">
                                <img src={skill} width="150" height="150" alt="skills"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-contents_nav_nome">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default Works; 