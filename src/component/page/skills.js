import React from 'react';
import { Link } from 'react-router-dom';
import icon_html5 from '../../img/icon_html5.png';
import icon_css3 from '../../img/icon_css3.png';
import icon_javascript from '../../img/icon_javascript.png';
import icon_java from '../../img/icon_java.png';
import icon_googlebot from '../../img/icon_googlebot.png';
import icon_other from '../../img/icon_other.png';

class Skills extends React.Component {

    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                    <h2 className="p-sub_title">SKILLS</h2>
                    <div className="p-contents_area">
                        <p className="skill_title">強み</p>
                        <ul className="strong_point">
                            <li>
                                細かい作業が得意で、デザインそっくりにコーディングすることができます。
                            </li>
                            <li>
                                HTMLをセマンティックにマークアップすることができます。
                            </li>
                            <li>
                                正しい文書構造で適したタグを使用してマークアップすることを心がけています。
                            </li>
                        </ul>
                    </div>
                    <div className="p-contents_area">
                        <p className="skill_title">これまでに身に着けたスキル</p>
                        <ul className="skill_list">
                            <li>
                                <img src={icon_html5} width="100" alt="html5"/>
                                <p>HTML5</p>
                                <p className="skill_detail">セマンティックなコーディングを心がけています。</p>
                            </li>
                            <li>
                                <img src={icon_css3} width="100" alt="css3"/>
                                <p>CSS3, Sass</p>
                                <p className="skill_detail">パフォーマンスの観点から、簡単なアイコンや動きなどは可能な限りCSSでコーディングするようにしています。</p>
                            </li>
                            <li>
                                <img src={icon_javascript} width="100" alt="javascript"/>
                                <p>JavaScript</p>
                                <p className="skill_detail">イベント処理やAPI通信などのコーディングができます。最近はReactを学習中です。</p>
                            </li>
                            <li>
                                <img src={icon_java} width="100" alt="java"/>
                                <p>Java</p>
                                <p className="skill_detail">金融系iOSアプリ(swift + Java)のサーバーサイドを担当し、API開発などをしていました。</p>
                            </li>
                            <li>
                                <img src={icon_googlebot} width="100" alt="googlebot"/>
                                <p>SEO</p>
                                <p className="skill_detail">構造化データの埋め込み、MFI対応、クローラビリティの最適化などを行い、サイトのSEO評価を上げる取り組みをしていました。</p>
                            </li>
                            <li>
                                <img src={icon_other} width="100" alt="その他"/>
                                <p>その他</p>
                                <p className="skill_detail">基本情報技術者<br/>Oracle Certified Java Programmer, Silver SE 8 認定資格</p>
                            </li>
                        </ul>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/about`} className="p-contents_nav_link">
                                ABOUT<br/>これまでの経歴について
                            </Link> 
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

export default Skills; 