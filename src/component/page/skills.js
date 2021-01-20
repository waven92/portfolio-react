import React from 'react';
import { Link } from 'react-router-dom';
import icon_html5 from '../../img/icon_html5.png';
import icon_css3 from '../../img/icon_css3.png';
import icon_javascript from '../../img/icon_javascript.png';
import icon_java from '../../img/icon_java.png';
import icon_googlebot from '../../img/icon_googlebot.png';
import icon_other from '../../img/icon_other.png';

class page2 extends React.Component {
 
    render() {
        return (
            <section>
                <Link to={`/`}>HOMEに戻る</Link>
                <h1 className="title">SKILLS</h1>
                <div className="skill_wrap">
                    <p className="skill_title">強み</p>
                    <ul>
                        <li>
                            細かい作業が好きで、デザインそっくりにコーディングすることができます。
                        </li>
                        <li>
                            HTMLをセマンティックにマークアップすることができます。
                        </li>
                        <li>
                            正しい文書構造で適したタグを使用してマークアップすることを心がけています。
                        </li>
                    </ul>
                </div>
                <div className="skill_wrap">
                    <p className="skill_title">これまでに身に着けたスキル</p>
                    <ul className="skill_list">
                        <li>
                            <img src={icon_html5} width="100" alt="html5"/>
                            <p>HTML</p>
                            <p className="skill_detail">正しい文書構造で適したタグを使用してマークアップすることを心がけています。</p>
                        </li>
                        <li>
                            <img src={icon_css3} width="100" alt="css3"/>
                            <p>CSS</p>
                            <p className="skill_detail">パフォーマンスの観点から、簡単なアイコンや動きなど、CSSでコーディング可能な個所はできるだけ画像やJavaScriptに頼らないように努めています。</p>
                        </li>
                        <li>
                            <img src={icon_javascript} width="100" alt="javascript"/>
                            <p>JavaScript</p>
                            <p className="skill_detail">イベント処理やAPI通信など基本的なことは実装できます。</p>
                        </li>
                        <li>
                            <img src={icon_java} width="100" alt="java"/>
                            <p>Java</p>
                            <p className="skill_detail">前職でiOSアプリ(swift + Java)のサーバーサイドの処理を実装していました。</p>
                        </li>
                        <li>
                            <img src={icon_googlebot} width="100" alt="googlebot"/>
                            <p>SEO</p>
                            <p className="skill_detail">構造化データの埋め込み、MFI対応などを担当していました。サーチコンソールのエラーをひたすら解消し、SEOの順位を上げる取り組みをしていました。</p>
                        </li>
                        <li>
                            <img src={icon_other} width="100" alt="その他"/>
                            <p>その他</p>
                            <p className="skill_detail">基本情報技術者<br/>Oracle Certified Java Programmer, Silver SE 11 認定資格</p>
                        </li>
                    </ul>
                </div>
                <ul className="ContentsList">
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