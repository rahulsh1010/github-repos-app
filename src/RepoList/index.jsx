import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import CardContent from "../CardContent";
import "./styles.css";

const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/orgs/godaddy/repos");
  return response.json();
};

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading repositories...</p>
      </div>
    );

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <Card key={repo.id} className="card">
          <CardContent className="card-content">
            <h2>{repo.name}</h2>
            <p>{repo.description || "No description available"}</p>
            <Link
              to={`/repo/${repo.name}`}
              state={{ repo }}
              className="view-details-btn"
            >
              View Details
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RepoList;
