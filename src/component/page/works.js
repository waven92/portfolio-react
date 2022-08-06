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
                    <div className="p-work l-contents_area">
                        <div className="p-work__contents_area c-contents_area">
                            <img src={reacr_app_img} width="426" height="294" alt="" className="p-work__img" loading="lazy"/>
                            <p className="p-work__title">映画検索アプリ</p>
                            <p className="p-work__text">外部API（OMDb API）を使用して映画を検索し、映画のポスター画像を表示するアプリケーションです。ReactコンポーネントやReact Hooks、外部APIの連携方法について学習するために作成しました。</p>
                            <p className="p-work__tech">技術・サービス：<br/>React, Hooks, create-react-app, OMDb API</p>
                            <a className="p-work__github" href="https://github.com/waven92/react_app">GitHub</a>
                        </div>
                        <div className="p-work__contents_area c-contents_area">
                            <img src={portfolio_img} width="426" height="294" alt="" className="p-work__img" loading="lazy"/>
                            <p className="p-work__title">ポートフォリオサイト</p>
                            <p className="p-work__text">SPAで構成しています。コンテンツ下部にナビゲーションを配置することでスムーズに閲覧できるように工夫しました。また見やすくするためにシンプルなUIにしました。スマホ画面にも対応しています。</p>
                            <p className="p-work__tech">技術・サービス：<br/>React, create-react-app, react-router-dom, Sass, gulp</p>
                            <a className="p-work__github" href="https://github.com/waven92/portfolio-react">GitHub</a>
                        </div>
                    </div>
                    <ul className="p-nav">
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-nav__link">
                                <img src={about} width="150" height="150" alt="" loading="lazy"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
                        <li>
                            <Link to={`/portfolio-react/skills`} className="p-nav__link">
                                <img src={skill} width="150" height="150" alt="" loading="lazy"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-nav__home">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default Works; 