import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../img/about.png';
import skill from '../../img/skill.png';
import work from '../../img/work.png';
 
class home extends React.Component {
    render() {
        return (
            <article>
                <h1 className="p-title"><Link to={`/portfolio-react/`}>Portfolio</Link></h1>
                <section>
                    <p className="p-home__description">ポートフォリオをご覧いただきありがとうございます。<br />Reactを使用したSPAで構成しています。<br />シンプルなUIにすることで使いやすさにこだわりました。</p>
                    <ul className="p-nav">
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-nav__link">
                                <img src={about} width="150" height="150" alt="" loading="lazy"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
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
                </section>
            </article>
        );
    }
}
 
export default home; 