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
        <Route exact path="/portfolio-react/" component={home} />
        <Route exact path="/portfolio-react/about" component={about} />
        <Route exact path="/portfolio-react/skills" component={skills} />
        <Route exact path="/portfolio-react/works" component={works} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;