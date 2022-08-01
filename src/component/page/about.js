import React from 'react';
import { Link } from 'react-router-dom';
import skill from '../../img/skill.png';
import work from '../../img/work.png';

class About extends React.Component {
 
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/portfolio-react/`}>Portfolio</Link></h1>
                <section>
                    <h2 className="p-sub_title">ABOUT</h2>
                    <p className="home_description">ECサイトの運営会社で、フロントエンドエンジニアとしてLP制作やSEO対策・UI改善・新規機能の開発などを行なっています。<br />常にユーザーおよび事業にどのような価値をもたらすのかを考え、有意義なUXとなるように最善を尽くすことでストレスのない最高のプロダクトを提供できるエンジニアになりたいです。<span>※詳細については職務経歴書をご覧ください。</span></p>
                    <div className="l-contents_area about c-contents_area">
                        <div>
                            <p className="about_title">愛媛大学農学部</p>
                            <p className="about_description">食品免疫学について研究する。国際会議で発表をするなど積極的に研究に取り組む。
                            <span className="about_note_title">関連論文(名前は旧姓です)：</span>
                            <span className="about_note">1) Ishida, M., Nishi, K., <span>Kunihiro, N.</span>, Onda, H., Nishimoto, S., & Sugahara, T. (2017). Immunostimulatory effect of aqueous extract of Coriandrum sativum L. seed on macrophages. Journal of the Science of Food and Agriculture, 97(14), 4727-4736.
                            <br/>2) Ishida, M., Nishi, K., Shinohara, K., <span>Kunihiro, N.</span>, Osajima, K., Suemitsu, T., & Sugahara, T. (2017). Immunostimulatory effect of dried bonito extract on mouse macrophage cell lines and mouse primary peritoneal macrophages. Cytotechnology, 69(2), 229-244.</span></p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">SES企業</p>
                            <p className="about_description">大学卒業後に入社しシステム開発を行なっていました。業務外にCRUD機能を持つ簡単なアプリを実装したり、Java Silverの認定資格を取得するなど積極的に技術力を高める努力をしました。フロントエンドエンジニアとしてのキャリアを築いていきたいと思い転職しました。</p>
                        </div>
                        <hr/>
                        <div>
                            <p className="about_title">ECサイト運営会社</p>
                            <p className="about_description">現在はフロントエンドエンジニアとして、主にLP制作やSEO対策・UI改善・新規機能の開発などを行なっています。1年以上かけて行なったSEO対策ではサイト訪問者数を咋対比123%までに増やすことに成功しました。常に「ユーザー視点で考える」ことを意識しています。</p>
                        </div>
                    </div>
                    <div className="l-contents_area p-about_content">
                        {/* 矢印 */}
                        <div className="p-about_content__arrow_wrap">
                            <span className="p-about_content__arrow"></span>
                            <span className="p-about_content__arrow_point point1"></span>
                            <span className="p-about_content__arrow_point point2"></span>
                            <span className="p-about_content__arrow_point point3"></span>
                        </div>
                        <div className="">
                            <div>
                                <p className="about_title">愛媛大学農学部</p>
                                <p className="about_description">食品免疫学について研究する。国際会議で発表をするなど積極的に研究に取り組む。
                                <span className="about_note_title">関連論文(名前は旧姓です)：</span>
                                <span className="about_note">1) Ishida, M., Nishi, K., <span>Kunihiro, N.</span>, Onda, H., Nishimoto, S., & Sugahara, T. (2017). Immunostimulatory effect of aqueous extract of Coriandrum sativum L. seed on macrophages. Journal of the Science of Food and Agriculture, 97(14), 4727-4736.
                                <br/>2) Ishida, M., Nishi, K., Shinohara, K., <span>Kunihiro, N.</span>, Osajima, K., Suemitsu, T., & Sugahara, T. (2017). Immunostimulatory effect of dried bonito extract on mouse macrophage cell lines and mouse primary peritoneal macrophages. Cytotechnology, 69(2), 229-244.</span></p>
                            </div>
                            <div>
                                <p className="about_title">SES企業</p>
                                <p className="about_description">大学卒業後に入社しシステム開発を行なっていました。業務外にCRUD機能を持つ簡単なアプリを実装したり、Java Silverの認定資格を取得するなど積極的に技術力を高める努力をしました。フロントエンドエンジニアとしてのキャリアを築いていきたいと思い転職しました。</p>
                            </div>
                            <div>
                                <p className="about_title">ECサイト運営会社</p>
                                <p className="about_description">現在はフロントエンドエンジニアとして、主にLP制作やSEO対策・UI改善・新規機能の開発などを行なっています。1年以上かけて行なったSEO対策ではサイト訪問者数を咋対比123%までに増やすことに成功しました。常に「ユーザー視点で考える」ことを意識しています。</p>
                            </div>
                        </div>
                    </div>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/portfolio-react/skills`} className="p-contents_nav_link">
                                <img src={skill} width="150" height="150" alt="skills"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/portfolio-react/works`} className="p-contents_nav_link">
                                <img src={work} width="150" height="150" alt="works"/>
                                <p>WORKS<br/>制作物を見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-contents_nav_nome">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default About; 