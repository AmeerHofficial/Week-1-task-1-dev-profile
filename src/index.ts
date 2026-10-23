// Developer Profile CLI
const developer = {
    name: "Muhammad Ameer Hamza",
    trainingWeek: 1,
    focus: "AI-Native Development"
}
console.log("------------------------------------")
console.log("Developer:", developer.name);
console.log("Training Week:", developer.trainingWeek);
console.log("Current Focus:", developer.focus);
console.log("------------------------------------")

const profile = process.env.GITHUB_USERNAME; 
if (!profile) {
    throw new Error("GITHUB_USERNAME is not set. Add it to .env and run Node with --env-file=.env.");
}
console.log("Fetching GitHub profile for:", profile , ".....");

//creating async function to fetch data from github api
async function fetchGitHubProfile(username: string) {
    try {
        const url = `https://api.github.com/users/${username}`;
    
    // Make the HTTP request using the built-in fetch API
    const response = await fetch(url);
    //
    // Check for specific HTTP status codes
    if (response.status === 404) {
      throw new Error("Error 404: GitHub user could not be found.");
    }
    
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    //
    // Check if the response status is okay (status code 200)
    if (!response.ok) {
      throw new Error(`GitHub user could not be found.`);
    }

    // Parse the response into JSON data
    const data = await response.json();

    // 4. Print the extracted GitHub profile values
    console.log("Username", data.login);
    console.log("Public Repositories", data.public_repos);
    console.log("Followers", data.followers);

  } catch (error: any) {
    // Part 11: Handle errors gracefully if something goes wrong
    console.error(`Error: ${error.message}`);
  }
}

// Execute the function
fetchGitHubProfile(profile);


