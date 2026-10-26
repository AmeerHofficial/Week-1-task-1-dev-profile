Developer Profile CLI

A lightweight command-line interface (CLI) application built with Node.js and TypeScript. This tool displays developer profile details and fetches real-time public account statistics directly from the GitHub REST API.

📋 Table of Contents

⚬ Project Overview
⚬ Project Structure
⚬ Prerequisites
⚬ Setup & Installation
⚬ Environment Variables
⚬ Running the Application
⚬ API Reference
⚬ Error Handling

🎯 Project Overview

The Developer Profile CLI performs two key tasks:
1. Displays local developer profile information (Name, Training Week, Current Focus).
2. Connects to GitHub's REST API to fetch real-time public statistics for a specified GitHub username (Username, Public Repositories, and Followers).

📁 Project Structure

Week-1-task-1-dev-profile/
├── js-basics/                     # JavaScript fundamentals practice exercises
│   ├── arrays.js
│   ├── developer-card.js
│   ├── dynamic-typing.js
│   ├── functions.js
│   ├── index.html
│   ├── index.js
│   ├── notes.md
│   ├── objects.js
│   ├── primitives.js
│   └── variables.js
├── src/
│   └── index.ts                   # Main application source code in TypeScript
├── .env                           # Local environment variables (DO NOT COMMIT)
├── .gitignore                     # Files and folders excluded from Git version control
├── package-lock.json              # Dependency tree lockfile
├── package.json                   # Project manifest and scripts
├── README.md                      # Project documentation
└── tsconfig.json                  # TypeScript compiler configuration



⚙️ Prerequisites

Make sure you have the following installed on your machine:
⚬ Node.js (v20.x or higher recommended)
⚬ npm (Node Package Manager)
⚬ Git

Verify your installation by running:
[bash]
node -v
npm -v


🚀 Setup & Installation

1. Clone the Repository:
[bash]
git clone https://github.com/ameerhofficial/Week-1-task-1-dev-profile.git
cd Week-1-task-1-dev-profile

2. Install Dependencies:
[bash]
npm install

🔑 Environment Variables
The application reads the target GitHub username from an environment variable.
1. Create a .env file in the root directory:
[bash]
touch .env
2. Add your target GitHub username:
[env]
GITHUB_USERNAME=(yourusername)

> ⚠️ Important: The .env file is listed inside .gitignore to prevent sensitive credentials and personal configurations from being committed to GitHub.

🏃 Running the Application

Option 1: Running TypeScript Directly (Development)
You can execute the TypeScript file directly using Node.js with native environment file support:
[bash]
node --env-file=.env src/index.ts

Option 2: Running Compiled JavaScript (Production)
Compile the TypeScript code into the dist/ directory first, then run the compiled file:
[bash]
npx tsc
node --env-file=.env dist/index.js

Example Terminal Output:

------------------------------------
Developer: Muhammad Ameer Hamza
Training Week: 1
Current Focus: AI-Native Development
------------------------------------
Fetching GitHub profile for: ameerhofficial .....
Username ameerhofficial
Public Repositories 12
Followers 45

🌐 API Reference

The CLI queries the public GitHub REST API:
⚬ Endpoint: GET https://api.github.com/users/{username}
⚬ Authentication: None required for public profiles.
⚬ Response Format: JSON

🛡️ Error Handling

The application includes robust runtime checks:
⚬ Missing Environment Variable: If GITHUB_USERNAME is missing from .env, the app throws a clean, actionable error message instructing the user to configure .env.
⚬ User Not Found (404 Error): If an invalid or non-existent username is provided, the application displays a clear GitHub user could not be found. message instead of crashing.
⚬ Network / System Failure: Uses try...catch blocks to gracefully log HTTP or connection issues.
