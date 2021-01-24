import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                    <h2 className="p-sub_title">ABOUT</h2>
                    <p>経歴をまとめました。</p>
                    <div className="p-contents_area about">
                        <div>
                            <p className="about_title">愛媛大学農学部 生物資源学科</p>
                            <p className="about_description">動物細胞工学研究室で食品免疫学について研究。
                            <span className="about_note_title">関連論文：</span>
                            <span className="about_note">1) Ishida, M., Nishi, K., <span>Kunihiro, N.</span>, Onda, H., Nishimoto, S., & Sugahara, T. (2017). Immunostimulatory effect of aqueous extract of Coriandrum sativum L. seed on macrophages. Journal of the Science of Food and Agriculture, 97(14), 4727-4736.
                            <br/>2) Ishida, M., Nishi, K., Shinohara, K., <span>Kunihiro, N.</span>, Osajima, K., Suemitsu, T., & Sugahara, T. (2017). Immunostimulatory effect of dried bonito extract on mouse macrophage cell lines and mouse primary peritoneal macrophages. Cytotechnology, 69(2), 229-244.</span></p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">SIer企業</p>
                            <p className="about_description">プログラマの兄の影響でIT企業に就職。システムエンジニアとして金融系アプリの開発を担当。API開発やWebView開発、スプラッシュ画面の開発を行う。フロントエンドの開発に興味を持ち転職する。</p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">ECサイト運営会社</p>
                            <p className="about_description">フロントエンドの開発を担当。サイトリニューアルやプロモーション用のLP制作、SEO対応、ページ速度改善などを行う。年に4回行われる自社ビッグイベントのフロントエンド開発を担当し売り上げに大きく貢献している。</p>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">Go To SKILLS</Link>
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
 
export default About; 