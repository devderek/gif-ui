# Purpose

The purpose of this project is to provide a UI for the Gif App. The UI requires the API layer to be running.

# Architecture

The application runs using React JS, a JavaScript web framework built by Facebook. This app in particular is a single page app, meaning the web page itself is only loaded once. JavaScript handles the entire user experience.

[App.js](App.js) is the primary entrypoint for the application and contains the primary layout for the application. In it, there are web routes that will render different web components based on the relative URL path. The page components are in the pages folder.

# Running the UI

The following are required to run this UI:
- Access to the internet (to download dependencies)
- The Gif API must be running on your local machine
- Node JS installed

In order to start the UI run the following command:
`npm run start`

The app will start running and will open a tab in your default browser with the app running.

Once in the application you can search for GIFs using the textbox near the top of the screen. If the API is running while searching GIFs will be returned on each search.