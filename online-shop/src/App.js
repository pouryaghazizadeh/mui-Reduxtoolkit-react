import Navbar from "./components/navbar";
import Home from "./pages/home";
import Card from "./components/card/index";
import GlobalStyle from "./globalStyles";
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" componrnt={Home} />
        <Route path="/card" componrnt={Card} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
