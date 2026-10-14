// Developer Profile CLI
const developer = {
    name: "Muhammad Ameer Hamza",
    trainingWeek: 1,
    focus: "AI-Native Development"
}
console.log("Developer:", developer.name);
console.log("Training Week:", developer.trainingWeek);
console.log("Current Focus:", developer.focus);

const profile = process.env.GITHUB_PROFILE || "octocat";
console.log("Fetching GitHub profile for:", profile);

//creating async function to featch data from github api
async function fetchGitHubProfile(username: string) {
    try {
        const url = `https://api.github.com/users/${username}`;
    
    // Make the HTTP request using the built-in fetch API
    const response = await fetch(url);

    // Check if the response status is okay (status code 200)
    if (!response.ok) {
      throw new Error(`GitHub user could not be found.`);
    }

    // Parse the response into JSON data
    const data = await response.json();

    // 4. Print the extracted GitHub profile values
    console.log(`Username: ${data.login}`);
    console.log(`Public Repositories: ${data.public_repos}`);
    console.log(`Followers: ${data.followers}`);

  } catch (error: any) {
    // Part 11: Handle errors gracefully if something goes wrong
    console.error(`Error: ${error.message}`);
  }
}

// Execute the function
fetchGitHubProfile(profile);