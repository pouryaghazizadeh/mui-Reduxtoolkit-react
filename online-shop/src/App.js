import Navbar from "./components/navbar";
import Home from "./pages/home";
import Card from "./components/card/index";
import GlobalStyle from "./globalStyles";
import PageNotFound from "./pages/pageNotFound";
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card" component={Card} />
        <Route component={PageNotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
