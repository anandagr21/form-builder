import './App.css';
import FormPage from "./pages/FormPage";
import Nav from "./Header/Nav";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionForm from "./components/QuestionForm";

function App() {
  return (

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/form/:id">
        <Nav />
        <QuestionForm />
      </Route>
      <Route exact path="/getForm/:id" component={FormPage} />
    </Switch>

  );
}

export default App;
