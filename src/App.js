import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./components/pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path="/about" component={About} />
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
