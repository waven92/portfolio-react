import React from 'react';
import { Link } from 'react-router-dom';
import icon_other from '../../img/icon_other.png';

class page2 extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                <h2 className="p-sub_title">WORK</h2>
                    <div className="p-contents_area">
                        <div className="work_wrap">
                            <img src={icon_other} width="100" alt="その他"/>
                            <div className="work_right">
                                <p className="work_title">映画検索アプリ</p>
                                <p className="work_description">React Hooks+Redukでチュートリアルを元に作成しました</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-contents_area">
                        <img src={icon_other} width="100" alt="その他"/>
                        <p className="skill_title">製作物</p>
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
 
export default page2; 