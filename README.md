Node.js Demo App with CI/CD Pipeline
Overview
This is a simple Node.js web application built with Express.js, designed to demonstrate a complete CI/CD pipeline using GitHub Actions and Docker. The app serves a basic "Hello from Node.js Demo App!" message and includes automated testing, building, and deployment to DockerHub.
Features

Express.js App: A minimal web server with a single endpoint (/).
Unit Tests: Uses Jest and Supertest for testing the API.
CI/CD Pipeline: Automates testing, building, and deploying a Docker image to DockerHub on push to the main branch.
Dockerized: Containerized using a lightweight Node.js Alpine image.

Project Structure
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml       # GitHub Actions workflow for CI/CD
├── src/
│   └── index.js           # Main Express.js application
├── tests/
│   └── app.test.js        # Unit tests for the app
├── Dockerfile             # Dockerfile for building the container
├── package.json           # Node.js dependencies and scripts
└── README.md              # This file

Prerequisites

Node.js: Version 20 or higher.
Docker: For building and running the container locally.
GitHub Account: For hosting the repository and running GitHub Actions.
DockerHub Account: For storing the Docker image.

Setup Instructions
1. Clone the Repository
git clone https://github.com/<your-username>/nodejs-demo-app.git
cd nodejs-demo-app

2. Install Dependencies
npm install

3. Run Locally
npm start


Access the app at http://localhost:3000.

4. Run Tests
npm test

5. Build and Run Docker Image Locally
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app


Access the app at http://localhost:3000.

CI/CD Pipeline
The CI/CD pipeline is defined in .github/workflows/main.yml and automates the following:

Trigger: Runs on every push to the main branch.
Build and Test Job:
Checks out the code.
Sets up Node.js (version 20).
Installs dependencies (npm install).
Runs tests (npm test).
Executes build step (npm run build).


Deploy Job:
Runs if tests pass.
Builds and pushes a Docker image to DockerHub as <your-username>/nodejs-demo-app:latest.



Setup for CI/CD

Create a DockerHub Repository:
Log in to DockerHub and create a repository named nodejs-demo-app.


Configure GitHub Secrets:
Go to your GitHub repo → Settings → Secrets and variables → Actions → Secrets.
Add:
DOCKERHUB_USERNAME: Your DockerHub username.
DOCKERHUB_TOKEN: A DockerHub access token (generate from DockerHub → Account Settings → Security).




Push to GitHub:git add .
git commit -m "Initial commit"
git push origin main


Monitor the Pipeline:
Go to the Actions tab in your GitHub repo to view workflow runs.
Check logs for build-and-test and deploy jobs.
On success, verify the image on DockerHub at <your-username>/nodejs-demo-app:latest.



Troubleshooting

Workflow Not Triggering:
Ensure the push is to the main branch.
Verify .github/workflows/main.yml exists and is valid.


Build Failures:
Check Actions tab logs for npm test or npm run build errors.
Ensure jest and supertest are installed (npm install --save-dev jest supertest).


Deploy Failures:
Verify DOCKERHUB_USERNAME and DOCKERHUB_TOKEN secrets.
Ensure the DockerHub repository exists.


Local Testing:
Run npm test or docker build locally to debug issues.



Extending the Project

Add more API endpoints in src/index.js.
Expand tests in tests/app.test.js.
Modify the build script in package.json for production builds (e.g., Webpack, TypeScript).
Add deployment to a cloud platform (e.g., AWS, Heroku) by extending the deploy job in main.yml.
