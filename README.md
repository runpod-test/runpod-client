# Runpod Take Home Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture
I added two approaches for handling client-server communication and state.
1. Using Redux and Redux Thunk for state management. This is the more traditional approach and is more suitable for larger applications. I have only added  a skeleton for this approach in `/src/modules`. I didn't include the reducers and actions since they are not needed to demonstrate the approach.
2. Using React Query for state management. This is a more modern approach and is more suitable for smaller applications. I have implemented this approach in the project (see `/src/views/HomePage.js).

Given the small and simple nature of this assignment, I have used react-query to handle client-server communication and state management. I have also used react-query's built-in caching to avoid unnecessary API calls.


## Available Scripts

In the project directory, you can run:

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
