# Getting Started with Create React App

This repository stores a web application developed in React js for podcast playback, then the step by step will be explained to be able to run each of the environments in which the project can be run (develovment and production)

## Firsts steps:

Clone the project and after that in the project directory, you can run:

### `npm install`

To install all dependencies and after that you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

After run `npm run build`. The build folder is ready to be deployed.
You may serve it with a static server:
### `npm install -g serve`

You can run:

### `serve -s build`

or you can add the port where you want to test it, in this case I use the por 4000

### `serve -s build -l 4000`

If you run this commants your production version will be running on http://localhost:4000


