import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {
        return (
            <section>
                <Link to={`/`}>HOMEに戻る</Link>
                <h1 className="title">WORKS</h1>
                <div className="skill_wrap">
                    <p className="skill_title">製作物</p>
                    <ul className="skill_list">
                        <li>
                            <p>HTML</p>
                            <p className="skill_detail">正しい文書構造で適したタグを使用してマークアップすることを心がけています。</p>
                        </li>
                        <li>
                            <p>CSS</p>
                            <p className="skill_detail">パフォーマンスの観点から、簡単なアイコンや動きなど、CSSでコーディング可能な個所はできるだけ画像やJavaScriptに頼らないように努めています。</p>
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
                </ul>
                <Link to={`/`}>HOMEに戻る</Link>
            </section>
        );
    }
}
 
export default page2; 