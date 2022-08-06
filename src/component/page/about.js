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
                    <div className="l-contents_area c-contents_area p-about">
                        <p className="p-about__header_text">ECサイトのフロントエンド開発をしております。<br />常にユーザーおよび事業にどのような価値をもたらすのかを考え、優れたUXとなるように最善を尽くすことでストレスのない最高のプロダクトを提供できるエンジニアになりたいと考えております。</p>
                        <hr/>
                        <div className="p-about__content">
                            <p className="p-about__date">2012年~2016年</p>
                            <div className="p-about__textwrap">
                                <p className="p-about__title">愛媛大学農学部</p>
                                <p className="p-about__description">食品免疫学について研究し、国際会議で発表するなど積極的に取り組みました。
                                <span className="p-about__note_title">関連論文(名前は旧姓です)：</span>
                                <span className="p-about__note">1) Immunostimulatory effect of aqueous extract of Coriandrum sativum L. seed on macrophages.  Ishida, M., Nishi, K., <span>Kunihiro, N.</span>, Onda, H., Nishimoto, S., & Sugahara, T. (2017) Journal of the Science of Food and Agriculture, 97(14), 4727-4736.
                                <br/>2) Immunostimulatory effect of dried bonito extract on mouse macrophage cell lines and mouse primary peritoneal macrophages.  Ishida, M., Nishi, K., Shinohara, K., <span>Kunihiro, N.</span>, Osajima, K., Suemitsu, T., & Sugahara, T. (2017) Cytotechnology, 69(2), 229-244.</span></p>
                            </div>
                        </div>
                        <hr/>
                        <div className="p-about__content">
                            <p className="p-about__date">2016年~2018年</p>
                            <div className="p-about__textwrap">
                                <p className="p-about__title">SES企業</p>
                                <p className="p-about__description">大学卒業後に入社しシステム開発を行なっておりました。業務外にCRUD機能を持つWEBアプリケーションを実装したり、資格を取得するなど積極的に技術力向上に努めました。フロントエンドエンジニアとしてのキャリアを築いていきたいと考え転職しました。</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="p-about__content">
                            <p className="p-about__date">2019年~現在</p>
                            <div className="p-about__textwrap">
                                <p className="p-about__title">ECサイト運営会社</p>
                                <p className="p-about__description">現在はフロントエンドエンジニアとして、LP制作やSEO対策・UI改善・新規機能の開発などを行なっています。SEO対策でサイト訪問者数を咋対比123%までに増やすことに成功しました。</p>
                            </div>
                        </div>
                        <p className="p-about__more">※詳細は職務経歴書に記載しております。</p>
                    </div>
                    <ul className="p-nav">
                        <li>
                            <Link to={`/portfolio-react/skills`} className="p-nav__link">
                                <img src={skill} width="150" height="150" alt="" loading="lazy"/>
                                <p>SKILLS<br/>強み・スキルを見る</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/portfolio-react/works`} className="p-nav__link">
                                <img src={work} width="150" height="150" alt="" loading="lazy"/>
                                <p>WORKS<br/>制作物を見る</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/portfolio-react/`} className="p-nav__home">HOME</Link>
                </section>
            </article>
        );
    }
}
 
export default About; 