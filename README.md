# GoDaddy GitHub Repository Dashboard

## Overview

This is a React application that fetches and displays repositories from GoDaddy's GitHub organization. It presents repository details using various charts and metrics, providing an interactive dashboard.

## Features

- **Repository List**: Displays a list of repositories with descriptions.
- **Detailed View**: Shows repository details including stats, owner information, and activity.
- **Charts and Graphs**:
  - Bar chart for repository metrics.
  - Pie chart for language distribution.
  - Line chart for repository timeline.
  - Doughnut chart for repository features.
- **Navigation**:
  - Clickable repository names to view details.
  - Back button for easy navigation.

## Technologies Used

- **Frontend**: React, React Router
- **UI Components**: Chart.js, CSS Modules
- **API**: GitHub REST API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rahulsh1010/github-repos-app.git
   cd github-repos-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Open in browser:
   ```
   http://localhost:3000
   ```

## Testing

To run unit tests:

```sh
npm test
```

## Folder Structure

```
repo-dashboard/
│── src/
│   │── components/
│   │   ├── RepoList.js
│   │   ├── RepoDetails.js
│   │   ├── Card.js
│   │   ├── Button.js
│   │── styles/
│   │   ├── styles.css
│   │── App.js
│   │── index.js
│── public/
│── package.json
│── README.md
```
