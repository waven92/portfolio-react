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
                    <p className="home_description">フロントエンドの開発をしています。</p>
                    <ul className="p-contents_nav">
                        <li>
                            <Link to={`/portfolio-react/about`} className="p-contents_nav_link">
                                <img src={about} width="150" height="150" alt="html5"/>
                                <p>ABOUT<br/>経歴を見る</p>
                            </Link> 
                        </li>
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
                </section>
            </article>
        );
    }
}
 
export default home; 