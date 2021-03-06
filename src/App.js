import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Books from "./components/Books";
import BookInfo from "./components/BookInfo";
import About from "./components/About";
import Soon from "./components/Soon";

// dummy user's data
// import DummyUsers from "./dummyUsers.json";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/SAAViBooks" exact component={Landing} />
          <Route path="/home" exact component={Landing} />
          <Route path="/SAAViBooks/" exact component={Landing} />
          <Route path="/books" exact component={Books} />
          <Route
            path="/bookInfo/:id"
            exact
            component={({ match }) => {
              console.log(match);
              return <BookInfo id={match.params.id} />;
            }}
          />
          <Route path="/about" exact component={About} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
