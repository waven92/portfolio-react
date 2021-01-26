import React from 'react';
import { Link } from 'react-router-dom';
import skill from '../../img/skill.png';
import work from '../../img/work.png';

class About extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/`}>Portfolio</Link></h1>
                <section>
                    <h2 className="p-sub_title">ABOUT</h2>
                    <div className="l-contents_area about c-contents_area">
                        <div>
                            <p className="about_title">愛媛大学農学部 生物資源学科</p>
                            <p className="about_description">動物細胞工学研究室で食品免疫学について研究。
                            <span className="about_note_title">関連論文：</span>
                            <span className="about_note">1) Ishida, M., Nishi, K., <span>Kunihiro, N.</span>, Onda, H., Nishimoto, S., & Sugahara, T. (2017). Immunostimulatory effect of aqueous extract of Coriandrum sativum L. seed on macrophages. Journal of the Science of Food and Agriculture, 97(14), 4727-4736.
                            <br/>2) Ishida, M., Nishi, K., Shinohara, K., <span>Kunihiro, N.</span>, Osajima, K., Suemitsu, T., & Sugahara, T. (2017). Immunostimulatory effect of dried bonito extract on mouse macrophage cell lines and mouse primary peritoneal macrophages. Cytotechnology, 69(2), 229-244.</span></p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">SI企業</p>
                            <p className="about_description">プログラマの兄の影響でIT企業に就職。システムエンジニアとして金融系アプリの開発を担当。API開発やWebView画面、スプラッシュ画面の開発を行う。フロントエンドの開発に興味を持ち転職する。</p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">ECサイト運営会社</p>
                            <p className="about_description">フロントエンドの開発を担当。サイトリニューアルやLP制作、ページ速度改善などを行う。また、SEO開発担当としてクローラビリティの改善、構造化データの設定、MFI対応などを行い、サイト流入数を昨対比120%まで増加させた。さらに、受注高約22億円の自社イベント(4回/年)をシステム化をするプロジェクトでフロントエンドの開発を担当し、開発工数を30人日から3人日までに削減した。</p>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/skills`} className="p-contents_nav_link">
                                <img src={skill} width="150" alt="skills"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/works`} className="p-contents_nav_link">
                                <img src={work} width="150" alt="works"/>
                                <p>WORKS<br/>制作物を見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/`} className="p-contents_nav_nome">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default About; 