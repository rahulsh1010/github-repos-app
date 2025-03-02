import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Test if the App renders without crashing
test("renders App without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/GoDaddy GitHub Repositories/i)).toBeInTheDocument();
});

// Test if RepoList renders on default route
test("renders RepoList component on default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/GoDaddy GitHub Repositories/i)).toBeInTheDocument();
});

// Test if RepoDetails route is accessible
test("renders RepoDetails when navigating to /repo/:repoName", () => {
  render(
    <MemoryRouter initialEntries={["/repo/test-repo"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Loading repository details/i)).toBeInTheDocument();
});

// Test navigation between routes
test("navigates from RepoList to RepoDetails", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const title = screen.getByText(/GoDaddy GitHub Repositories/i);
  expect(title).toBeInTheDocument();
});
