import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './page/home';
import about from './page/about';
import skills from './page/skills';
import works from './page/works';
import '../css/portfolio.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
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