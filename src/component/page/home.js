import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
 
class home extends React.Component {
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                    <p className="home_description">フロントエンドの開発をしています。</p>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/about`} className="p-contents_nav_link">
                                ABOUT<br/>経歴を見る
                            </Link> 
                        </li>
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">SKILLS<br/>強み・スキルを見る</Link>
                        </li>
                        <li>
                            <Link to={`/works`} className="p-contents_nav_link">WORKS<br/>制作物を見る</Link>
                        </li>
                    </ul>
                </section>
            </article>
        );
    }
}
 
export default home; 