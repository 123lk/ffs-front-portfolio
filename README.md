# For Fact's Sake - Front End

- For Fact's Sake is a community-driven news fact checker website that works with a Google Chrome extension to highlight untrustworthy news sites in the DOM. This was implemented using AWS for the backend, with a React-Redux frontend, and a downloadable Google Chrome extension. Our front end can be viewed at https://forfactsake.herokuapp.com/
- The role of the front end is to act as the community hub through which news articles are discussed. Following this discussion, a moderator may determine whether or not the story is considered to be 'fake news' or not.
- Articles that are considered 'fake' will count against that news site, changing the colour of the flag being rendered by the Chrome extension in the DOM of websites such as Twitter, Facebook, and Google. Further statistics can be viewed through a React Tooltip also rendered into the DOM.
- Given that our front end is concerned with registering 'fake news' articles against particular domains, our Redux reducers are primarily divided between Articles and Domains.
- Our front end was built using the Bulma framework, and features an Algolia searchbar allowing navigation through 'hits' with our database
- We build a Reddit-style recursive comment system for article discussion on our article pages.

# Getting Started

- Node.js is required to launch the project
- To check if it is installed, run 'node -v' in your terminal
- If it isn't, you can download it here: https://nodejs.org/en/
- Now run 'npm install' at the root of this repository to install the required dependencies.
- Once they are installed, you can launch the app using 'npm run dev'
- Once compiled, you can access FFS Front through http://localhost:9090/
- Alternatively, you can skip this process and view our hosted site at https://forfactsake.herokuapp.com/ 

# Testing

- You can run our automated tests using the command 'npm test'
- The testing framework used is Mocha
- Chai is the assertion library used
- There are two types of test on our front end: those for our reducers, and those for our helper functions
- For example, normalizeArrayById is a helper function

# Built With

- React-Redux - UI framework 
- Bulma - responsiveness framework
- Axios - used for API calls
- Algolia used for search capability
- HTML/SCSS
- Bundled using Webpack
- Tested using Mocha/Chai

# Authors

- Joe Caine & Laura Kenny - pair programmed Front End
- API linkup coordinated with Lee Morris
- Additional help from Sam Caine, Richard Thompson and Mauro Gestoso

# Acknowledgments

- Thanks to Mauro Gestoso and James Brooke for mentoring us through our final project. 
