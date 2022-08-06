import React from 'react';
import { Link } from 'react-router-dom';
import icon_html5 from '../../img/icon_html5.png';
import icon_css3 from '../../img/icon_css3.png';
import icon_javascript from '../../img/icon_javascript.png';
import icon_java from '../../img/icon_java.png';
import icon_googlebot from '../../img/icon_googlebot.png';
import icon_other from '../../img/icon_other.png';
import about from '../../img/about.png';
import work from '../../img/work.png';

class Skills extends React.Component {

    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/portfolio-react/`}>Portfolio</Link></h1>
                <section className="p-skill">
                    <h2 className="p-sub_title">SKILLS</h2>
                    <div className="l-contents_area c-contents_area">
                        <p className="p-skill__title">強み・活かせる経験</p>
                        <ul className="p-skill__strong_point">
                            <li>
                                パフォーマンスやセキュリティを意識したコーディングができます。
                            </li>
                            <li>
                                FLOCSSの設計思想を理解し、保守性の高いCSS設計ができます。
                            </li>
                            <li>
                                サーバーサイドの開発経験がありサーバーサイドエンジニアと円滑にコミュニケーションを取ることができます。
                            </li>
                            <li>
                                アジャイル開発の経験があります。
                            </li>
                        </ul>
                    </div>
                    <div className="l-contents_area c-contents_area">
                        <p className="p-skill__title">これまでに身に着けたスキル</p>
                        <ul className="p-skill__list">
                            <li>
                                <img src={icon_html5} width="80" alt="" loading="lazy"/>
                                <p>HTML5</p>
                                <p className="p-skill__detail">セマンティックにマークアップすることができます。</p>
                            </li>
                            <li>
                                <img src={icon_css3} width="80" alt="" loading="lazy"/>
                                <p>CSS3, Sass</p>
                                <p className="p-skill__detail">FLOCSSの設計思想を理解し、保守性の高いCSS設計ができます。</p>
                            </li>
                            <li>
                                <img src={icon_javascript} width="80" alt="" loading="lazy"/>
                                <p>JavaScript</p>
                                <p className="p-skill__detail">パフォーマンスやセキュリティを意識したコーディングができます。</p>
                            </li>
                            <li>
                                <img src={icon_java} width="80" alt="" loading="lazy"/>
                                <p>Java</p>
                                <p className="p-skill__detail">Javaを使ったシステム開発の経験があります。</p>
                            </li>
                            <li>
                                <img src={icon_googlebot} width="80" alt="" loading="lazy"/>
                                <p>SEO対策</p>
                                <p className="p-skill__detail">構造化データの埋め込みやクローラビリティ改善などのSEO対策で自社サイトの流入数を前年比123%にしました。</p>
                            </li>
                            <li>
                                <img src={icon_other} width="80" alt="" loading="lazy"/>
                                <p>資格</p>
                                <p className="p-skill__detail">基本情報技術者<br/>Oracle Certified Java Programmer, Silver SE 8 認定資格</p>
                            </li>
                        </ul>
                    </div>
                    <ul className="p-nav">
                        <li>
                            <Link to={`/portfolio-react/works`} className="p-nav__link">
                                <img src={work} width="150" height="150" alt="" loading="lazy"/>
                                <p>WORKS<br/>制作物を見る</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-nav__link">
                                <img src={about} width="150" height="150" alt="" loading="lazy"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-nav__home">HOME</Link>
                </section>
            </article>
        );
    }
}

export default Skills; 