import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {
        return (
            <div>
                ABOUT!!!
                <br/>
                <Link to={`/`}>Go To HOME</Link>
            </div>
        );
    }
}
 
export default page2; 