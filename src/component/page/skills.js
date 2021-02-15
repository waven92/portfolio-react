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
                <section>
                    <h2 className="p-sub_title">SKILLS</h2>
                    <div className="l-contents_area c-contents_area">
                        <p className="skill_title">強み</p>
                        <ul className="strong_point">
                            <li>
                                細かい作業が得意で、デザインそっくりにコーディングすることができます。
                            </li>
                            <li>
                                メンテナンス性やパフォーマンスを意識したコーディングができます。
                            </li>
                            <li>
                                サーバーサイドの開発経験がありサーバーサイドエンジニアと円滑にコミュニケーションを取ることができます。
                            </li>
                            <li>
                                観察力がありレビュー中に細かいコーディングミスを見つけることができます。(よく褒められます)
                            </li>
                        </ul>
                    </div>
                    <div className="l-contents_area c-contents_area">
                        <p className="skill_title">これまでに身に着けたスキル</p>
                        <ul className="skill_list">
                            <li>
                                <img src={icon_html5} width="100" alt="html5"/>
                                <p>HTML</p>
                                <p className="skill_detail">セマンティックにマークアップすることができます。</p>
                            </li>
                            <li>
                                <img src={icon_css3} width="100" alt="css3"/>
                                <p>CSS, Sass</p>
                                <p className="skill_detail">パフォーマンスの観点から、簡単なアイコンや動きなどは可能な限りCSSでコーディングするようにしています。またFLOCSSを理解しメンテナンス性の高いコーディングができます。</p>
                            </li>
                            <li>
                                <img src={icon_javascript} width="100" alt="javascript"/>
                                <p>JavaScript</p>
                                <p className="skill_detail">イベント処理やAPI通信などのコーディングができます。最近はReactを学習中です。</p>
                            </li>
                            <li>
                                <img src={icon_java} width="100" alt="java"/>
                                <p>Java</p>
                                <p className="skill_detail">前職では金融系iOSアプリ(swift + Java)のサーバーサイドを担当し、API開発などをしていました。</p>
                            </li>
                            <li>
                                <img src={icon_googlebot} width="100" alt="googlebot"/>
                                <p>SEO</p>
                                <p className="skill_detail">構造化データの埋め込み、MFI対応、クローラビリティの改善などを行い、サイトのSEO評価を上げることでサイト流入数を増加させる取り組みをしていました。</p>
                            </li>
                            <li>
                                <img src={icon_other} width="100" alt="その他"/>
                                <p>資格</p>
                                <p className="skill_detail">基本情報技術者<br/>Oracle Certified Java Programmer, Silver SE 8 認定資格</p>
                            </li>
                        </ul>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/portfolio-react/works`} className="p-contents_nav_link">
                                <img src={work} width="150" height="150" alt="works"/>
                                <p>WORKS<br/>制作物を見る</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-contents_nav_link">
                                <img src={about} width="150" height="150" alt="html5"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-contents_nav_nome">HOME</Link>
                </section>
            </article>
        );
    }
}

export default Skills; 