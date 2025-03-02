import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="app-title">GoDaddy GitHub Repositories</h1>
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/repo/:repoName" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
