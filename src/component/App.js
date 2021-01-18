import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './page/home'; //作成したpage1.jsを読み込んでいる
import about from './page/about';
import skills from './page/skills';
import works from './page/works';
import '../App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/skills" component={skills} />
        <Route exact path="/works" component={works} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
