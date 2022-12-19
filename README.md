# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## My Notes

Here you can add your own notes and comments about the project.
For example, what trade offs did you have to decide for? What would you have done differently if you had more time?
What did you think of the tasks? Was it too much / too easy / too ambiguous?

- First of all: this was a fun, great to play aroung with U-Bahn data!
- because of the limited time I decided to not get into the backend part of this task but fetch the data from a file.

### my decisions

- I use React Router to be able to navigate easily and use the url parameter with useparams.
- the frontend would be ready to make an api call by using the url parameter.
- the task ask to render the next stops, but this depends on the direction the user wants to take the train. Here I now just show the next stops into both directions
- I use prettier for formatting
- I use React Testing Library / Jest for unit tests

### if I had more time

#### code

- I would do more code-splitting, would have components that contain the logic and smaller 'dumb' components that render. E.g. in the SubwayDetailPage for example a small component to render the accessible lines and another one to render the next stations.
- I'd add a utils folder for functions that are widely used throughout the code. I would add SubwayDetailsPage/searchSelectedLine() and import it from there.
- I would let each component have it's own css file for better organisation and readability.
- I would continue upgrading to React 18 to fix this warning: 
when the tests run there is a warning, that "ReactDOM.render is no longer supported in React 18. Use createRoot instead." I implemented createRoot as shown in the docs but the warning persists. 
- and I would add more tests

#### UI / Usability

- I would make the list of stations scrollable.
- I would let the user click to choose the line direction and then show the 3 next stops in the chosen direction.
