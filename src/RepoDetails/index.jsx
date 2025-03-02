import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./styles.css";
import Button from "../Button";

const RepoDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const repo = state?.repo;

  if (!repo) return <p>Loading repository details...</p>;

  const barChartData = {
    labels: ["Stars", "Forks", "Watchers", "Open Issues"],
    datasets: [
      {
        label: "Repository Metrics",
        data: [
          repo.stargazers_count,
          repo.forks_count,
          repo.watchers_count,
          repo.open_issues_count,
        ],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
      },
    ],
  };

  const pieChartData = {
    labels: ["JavaScript", "Other"],
    datasets: [
      {
        data: [
          repo.language === "JavaScript" ? 80 : 20,
          repo.language !== "JavaScript" ? 80 : 20,
        ],
        backgroundColor: ["#FFD700", "#CCCCCC"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Created", "Updated", "Pushed"],
    datasets: [
      {
        label: "Repository Timeline",
        data: [
          new Date(repo.created_at).getTime(),
          new Date(repo.updated_at).getTime(),
          new Date(repo.pushed_at).getTime(),
        ],
        borderColor: "#673AB7",
        fill: false,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Has Issues", "Has Projects", "Has Downloads", "Has Wiki"],
    datasets: [
      {
        data: [
          repo.has_issues ? 1 : 0,
          repo.has_projects ? 1 : 0,
          repo.has_downloads ? 1 : 0,
          repo.has_wiki ? 1 : 0,
        ],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="back-button-container">
        <Button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </div>
      <div className="repo-details">
        <div className="repo-card">
          <h1>{repo.name}</h1>
          <p>{repo.description || "No description available"}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="repo-card repo-stats">
          <h2>Repository Stats</h2>
          <Bar data={barChartData} />
          <p>
            <strong>Language:</strong> {repo.language || "Not specified"}
          </p>
          <p>
            <strong>Size:</strong> {repo.size} KB
          </p>
          <p>
            <strong>Default Branch:</strong> {repo.default_branch}
          </p>
        </div>
        <div className="repo-card owner-info">
          <h2>Owner Information</h2>
          <img
            src={repo.owner.avatar_url}
            alt="Owner Avatar"
            className="owner-avatar"
          />
          <p>
            <strong>Owner:</strong> {repo.owner.login}
          </p>
          <a
            href={repo.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
        <div className="repo-card additional-info">
          <h2>Additional Information</h2>
          <Pie data={pieChartData} />
          <p>
            <strong>Archived:</strong> {repo.archived ? "Yes" : "No"}
          </p>
          <p>
            <strong>Disabled:</strong> {repo.disabled ? "Yes" : "No"}
          </p>
          <p>
            <strong>License:</strong> {repo.license?.name || "Not specified"}
          </p>
        </div>
        <div className="repo-card repository-features">
          <h2>Repository Features</h2>
          <Doughnut data={doughnutChartData} />
        </div>
        <div className="repo-card timeline-info">
          <h2>Repository Timeline</h2>
          <Line data={lineChartData} />
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(repo.created_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(repo.updated_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Last Pushed:</strong>{" "}
            {new Date(repo.pushed_at).toLocaleDateString()}
          </p>
        </div>
        <div className="repo-card security-info">
          <h2>Security & Permissions</h2>
          <p>
            <strong>Admin Access:</strong>{" "}
            {repo.permissions.admin ? "Yes" : "No"}
          </p>
          <p>
            <strong>Push Access:</strong> {repo.permissions.push ? "Yes" : "No"}
          </p>
          <p>
            <strong>Pull Access:</strong> {repo.permissions.pull ? "Yes" : "No"}
          </p>
        </div>
        <div className="repo-card activity-info">
          <h2>Repository Activity</h2>
          <p>
            <strong>Forks:</strong> {repo.forks}
          </p>
          <p>
            <strong>Open Issues:</strong> {repo.open_issues}
          </p>
          <p>
            <strong>Subscribers:</strong> {repo.subscribers_url}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
